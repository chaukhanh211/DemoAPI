$(document).ready(function () {
    var customer = new EmployeeJS();
    customer.loadData();
});

class EmployeeJS {
    constructor() {
        this.initEvents();
    }
    initEvents() {
        $('#btnAdd').click(this.btnAddOnclick.bind(this));
        $('#buttonSave').click(this.btnSaveOnclick.bind(this));
        $('#buttonCancel').click(this.closeButton.bind(this));
        $('.title-close-button').click(this.closeButton.bind(this));
        $('input[require]').blur(this.checkRequire);
    }
    loadData() {
        $('.grid tbody').empty();
        $.each(employee, function (index, item) {
            var stringHtml = ` <tr>
                                <td>`+ item.employeeCode + `</td>
                                <td>`+ item.employeeName + `</td>
                                <td>`+ item.email + `</td>
                                <td>`+ item.mobile + `</td>
                                <td>`+ item.companyName + `</td>
                            </tr>`;
            $('.grid tbody').append(stringHtml);
        });
    }
    btnAddOnclick() {
        this.showDialogDetail();
    }
    closeButton() {
        this.hideDialogDetail();
    }
    showDialogDetail() {
        $('.dialog-modal').show();
        $('.dialog').show();
        $('#txtEmployeeCode').focus();
    }
    hideDialogDetail() {
        $('.dialog-modal').hide();
        $('.dialog').hide();
    }

    btnSaveOnclick() {
        // validate dữ liệu nhập trên form
        var inputRequires = $(["require"]);
        var isValid = true;
        $.each(inputRequires, function (index, input) {
            var valid = $(input).trigger("blur");
            if (isValid && valid.hasClass("require-error")) {
                isValid = false;
            }
        })

        if (isValid) {
            // thu thập thông tin người dùng
            var emp = {};
            emp.employeeCode = $('#txtEmployeeCode').val();
            emp.employeeName = $('#txtemployeeName').val();
            emp.email = $('#txtEmail').val();
            emp.mobile = $('#txtMobile').val();
            emp.companyName = $('#txtCompany').val();
            // cất dữ liệu vào database
            employee.push(emp);
            this.loadData();
            this.hideDialogDetail();
        }
    }
    checkRequire() {
        var require = this.value;
        if (!require) {
            $(this).addClass('require-error');
            $(this).attr('title', 'Bạn phải nhập thông tin này');
        } else {
            $(this).removeClass('require-error');
            $(this).removeAttr('title', 'Bạn phải nhập thông tin này');
        }
    }
}


var employee = [
    {
        employeeCode: "NV1",
        employeeName: "Nguyễn văn a",
        email: "jkshjsdfgh@gmail.com",
        mobile: "21521515131",
        companyName: "sfgsjkhfsdjkhf"
    },
    {
        employeeCode: "NV2",
        employeeName: "Nguyễn văn b",
        email: "jkshjsdfgh@gmail.com",
        mobile: "21521515131",
        companyName: "sfgsjkhfsdjkhf"
    },
    {
        employeeCode: "NV3",
        employeeName: "Nguyễn văn c",
        email: "jkshjsdfgh@gmail.com",
        mobile: "21521515131",
        companyName: "sfgsjkhfsdjkhf"
    },
    {
        employeeCode: "NV4",
        employeeName: "Nguyễn văn d",
        email: "jkshjsdfgh@gmail.com",
        mobile: "21521515131",
        companyName: "sfgsjkhfsdjkhf"
    },
    {
        employeeCode: "NV1",
        employeeName: "Nguyễn văn a",
        email: "jkshjsdfgh@gmail.com",
        mobile: "21521515131",
        companyName: "sfgsjkhfsdjkhf"
    }
]