const onLoad = () => {
    createHeader();
    createBody();
    createFooter();
};

const createHeader = () => {
    const div = document.createElement("div");
    div.id = "header";
    div.innerHTML = "<h1>header</h1>";
    document.body.appendChild(div);
};

const createBody = () => {
    createUserForm();
    createPaymentForm();
    createMainTable();
};

const createUserForm = () => {
    const div = document.createElement("div");
    div.id = "userForm";
    div.innerHTML = "<div id=\"users\">" +
        "        <h2>users</h2>" +
        "        <form name=\"user_form\">" +
        "            <input type=\"text\" name=\"user_name\" id=\"user_input\">" +
        "            <button onclick=\"add_user();return false;\">add</button>" +
        "        </form>" +
        "    </div>";

    document.body.appendChild(div);
};

const createPaymentForm = () => {
    const div = document.createElement("div");
    div.id = "paymentForm";
    div.innerHTML = "<div id=\"payment\">" +
        "        <h2>payment</h2>" +
        "        <form name=\"payment_form\">" +
        "            <p>用途</p>" +
        "            <input type=\"text\" name=\"use\" id=\"use_input\">" +
        "            <p>金額</p>" +
        "            <input type=\"text\" name=\"total_payment\" id=\"total_input\"> " +
        "            <button onclick=\"add_payment();return false;\">add</button>" +
        "        </form>" +
        "    </div>";

    document.body.appendChild(div);
};

const createMainTable = () => {
    const div = document.createElement("div");
    div.id = "main";
    div.innerHTML = "    <form>" +
        "        <table id=\"main_table\">" +
        "            <thead>" +
        "                <tr>" +
        "                    <th>#</th>" +
        "                    <th>text</th>" +
        "                    <th>total</th>" +
        "                </tr>" +
        "            </thead>" +
        "            <tbody>" +
        "                <tr>" +
        "                    <td>1</td>" +
        "                    <td><input type=\"text\" name=\"memo\" value=\"\" /></td>" +
        "                    <td><input type=\"text\" name=\"total\" value=\"0\" /></td>" +
        "                </tr>" +
        "            </tbody>" +
        "            <tfoot>" +
        "            </tfoot>" +
        "        </table>" +
        "    </form>";

    document.body.appendChild(div);
};

const createFooter = () => {
    const div = document.createElement("div");
    div.id = "footer";
    div.innerHTML = '<hr />';
    document.body.appendChild(div);
};

const add_user = () => {
    const user_form = document.forms["user_form"];
    users.push(user_form.elements["user_name"].value);
    insertColumn("main_table", users[users.length - 1]);
};

const add_payment = () => {
    const payment_form = document.forms["payment_form"];
    const use = payment_form.elements["use"].value;
    const total_payment = payment_form.elements["total_payment"].value;
    insertRow("main_table", use, total_payment);
};

const insertColumn = (id, user) => {
    // テーブル取得
    const table = document.getElementById(id);
    // 行数取得
    const rows = table.rows.length;

    // header にはユーザ名
    const th = document.createElement("th");
    const text = document.createTextNode(user);
    table.rows[0].appendChild(th).appendChild(text);

    // 各行末尾にセルを追加
    for ( let i = 1; i < rows; i++) {
        let cell = table.rows[i].insertCell(-1);
        cell.innerHTML = '<input type="text" name="' +
            user + '-' + i +
        '" value="0" />';
    }
};

const insertRow = (id, use, total_payment) => {
    // テーブル取得
    const table = document.getElementById(id);
    // 列数取得
    const columns = table.rows[0].cells.length;

    // 行を追加
    const row = table.insertRow(-1);
    //
    const max_row = table.rows.length;

    // 先頭列
    let cell1 = row.insertCell(-1);
    cell1.innerHTML = max_row - 1;

    // 用途列
    let cell2 = row.insertCell(-1);
    cell2.innerHTML =  '<input type="text" name="test" value="' +
        use +
        '" />';

    // 総額列
    let cell3 = row.insertCell(-1);
    cell3.innerHTML =  '<input type="text" name="test" value="' +
        total_payment +
        '" />';

    for( let i = 3; i < columns; i++) {
        let cell = row.insertCell(-1);
        cell.innerHTML =  '<input type="text" name="test" value="0" />';
    }
};

let users = [];

document.addEventListener("DOMContentLoaded",onLoad);