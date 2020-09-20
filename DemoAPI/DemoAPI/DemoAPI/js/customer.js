$(document).ready(function () {
    var customer = new CustomerJS();
    customer.loadData();
});

class CustomerJS {
    constructor() {

    }
    loadData() {
        $.each(data, function (index, item) {
            var stringHtml = ` <tr>
                                <td>`+ item.customerCode + `</td>
                                <td>`+ item.customerName + `</td>
                                <td>`+ item.email + `</td>
                                <td>`+ item.mobile + `</td>
                                <td>`+ item.address + `</td>
                            </tr>`;
            $('.grid tbody').append(stringHtml);
        });
    }
    add() {

    }
    edit() {

    }
    delete() {
    }
}
var data = [
    {
        customerCode: 'NV001',
        customerName: "Nguyễn Văn Hoàng",
        email: "dkc211@gmail.com",
        mobile: "09781703448",
        address: "Tuy An Phú Yên"
    },
    {
        customerCode: 'NV001',
        customerName: "Nguyễn Văn Quang",
        email: "dkc211@gmail.com",
        mobile: "09781703448",
        address: "Tuy An Phú Yên"
    },
    {
        customerCode: 'NV001',
        customerName: "Nguyễn Văn Tuấn",
        email: "dkc211@gmail.com",
        mobile: "09781703448",
        address: "Tuy An Phú Yên"
    }
];