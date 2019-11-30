const TAX = 0.08125;

$("#ori_price_us").change(function () {
    if (Number($(this).val()) < 0) {
        alert('原价输入不正确！');
        $(this).val("");
    }
    if ($(this).val() === "" || $(this).val() === "0") {
        $("#discount").prop("disabled", true);
        $("#extr_discount").prop("disabled", true);
        $("#ori_price_us_display").val($("#ori_price_us").val());
    } else {
        $("#discount").prop("disabled", false);
        let ori_dollar = Number($(this).val());
        if ($("#discount").val() === "" || $("#discount").val() === "0") {
            $("#ori_price_us_display").val(ori_dollar);
        } else if ($("#extr_discount").val() === "" || $("#extr_discount").val() === "0") {
            let discount = (100 - Number($("#discount").val())) / 100;
            let price = ori_dollar * discount;
            $("#ori_price_us_display").val(price.toFixed(2));
        } else {
            let discount = (100 - Number($("#discount").val())) * (100 - Number($("#extr_discount").val())) / 10000;
            let price = ori_dollar * discount;
            $("#ori_price_us_display").val(price.toFixed(2));
        }
    }
    let after_tax = Number($("#ori_price_us_display").val()) * (1 + TAX);
    $("#after_tax_price_us_display").val(after_tax.toFixed(2));
    let rate = Number($("#exchange_rate_display").val());
    $("#rmb_price_display").val((after_tax * rate).toFixed(2));
    let fee_rate = Number($("input[name='feeOptions']:checked").val());
    $("#suggest_rmb_price").val(((1 + fee_rate) * after_tax * rate).toFixed(2));
});

$("#discount").change(function () {
    if (Number($(this).val()) < 0 || Number($(this).val()) > 100) {
        alert('折扣输入不正确！');
        $(this).val("");
    }
    if ($(this).val() === "" || $(this).val() === "0") {
        $("#extr_discount").prop("disabled", true);
        $("#ori_price_us_display").val($("#ori_price_us").val());
    } else {
        $("#extr_discount").prop("disabled", false);
        let ori_dollar = $("#ori_price_us").val();
        if ($("#extr_discount").val() === "" || $("#extr_discount").val() === "0") {
            let discount = (100 - Number($("#discount").val())) / 100;
            let price = ori_dollar * discount;
            $("#ori_price_us_display").val(price.toFixed(2));
        } else {
            let discount = (100 - Number($("#discount").val())) * (100 - Number($("#extr_discount").val())) / 10000;
            let price = ori_dollar * discount;
            $("#ori_price_us_display").val(price.toFixed(2));
        }
    }
    let after_tax = Number($("#ori_price_us_display").val()) * (1 + TAX);
    $("#after_tax_price_us_display").val(after_tax.toFixed(2));
    let rate = Number($("#exchange_rate_display").val());
    $("#rmb_price_display").val((after_tax * rate).toFixed(2));
    let fee_rate = Number($("input[name='feeOptions']:checked").val());
    $("#suggest_rmb_price").val(((1 + fee_rate) * after_tax * rate).toFixed(2));
});

$("#extr_discount").change(function () {
    if (Number($(this).val()) < 0 || Number($(this).val()) > 100) {
        alert('额外折扣输入不正确！');
        $(this).val("");
    }
    let ori_dollar = $("#ori_price_us").val();
    let discount = (100 - Number($("#discount").val())) * (100 - Number($("#extr_discount").val())) / 10000;
    let price = ori_dollar * discount;
    $("#ori_price_us_display").val(price.toFixed(2));
    let after_tax = Number($("#ori_price_us_display").val()) * (1 + TAX);
    $("#after_tax_price_us_display").val(after_tax.toFixed(2));
    let rate = Number($("#exchange_rate_display").val());
    $("#rmb_price_display").val((after_tax * rate).toFixed(2));
    let fee_rate = Number($("input[name='feeOptions']:checked").val());
    $("#suggest_rmb_price").val(((1 + fee_rate) * after_tax * rate).toFixed(2));
});

$("input[name='feeOptions']").change(function () {
    let fee_rate = Number($("input[name='feeOptions']:checked").val());
    if ($("#ori_price_us").val() != "") {
        if ($("#discount").val() != "") {
            if ($("extr_discount").val() != "") {
                let ori_dollar = $("#ori_price_us").val();
                let discount = (100 - Number($("#discount").val())) * (100 - Number($("#extr_discount").val())) / 10000;
                let price = ori_dollar * discount;
                $("#ori_price_us_display").val(price.toFixed(2));
                let after_tax = Number($("#ori_price_us_display").val()) * (1 + TAX);
                $("#after_tax_price_us_display").val(after_tax.toFixed(2));
                let rate = Number($("#exchange_rate_display").val());
                $("#rmb_price_display").val((after_tax * rate).toFixed(2));
                let fee_rate = Number($("input[name='feeOptions']:checked").val());
                $("#suggest_rmb_price").val(((1 + fee_rate) * after_tax * rate).toFixed(2));
            } else {
                let ori_dollar = $("#ori_price_us").val();
                let discount = (100 - Number($("#discount").val())) / 100;
                let price = ori_dollar * discount;
                $("#ori_price_us_display").val(price.toFixed(2));
                let after_tax = Number($("#ori_price_us_display").val()) * (1 + TAX);
                $("#after_tax_price_us_display").val(after_tax.toFixed(2));
                let rate = Number($("#exchange_rate_display").val());
                $("#rmb_price_display").val((after_tax * rate).toFixed(2));
                let fee_rate = Number($("input[name='feeOptions']:checked").val());
                $("#suggest_rmb_price").val(((1 + fee_rate) * after_tax * rate).toFixed(2));
            }
        } else {
            let ori_dollar = $("#ori_price_us").val();
            $("#ori_price_us_display").val(ori_dollar);
            let after_tax = Number($("#ori_price_us_display").val()) * (1 + TAX);
            $("#after_tax_price_us_display").val(after_tax.toFixed(2));
            let rate = Number($("#exchange_rate_display").val());
            $("#rmb_price_display").val((after_tax * rate).toFixed(2));
            let fee_rate = Number($("input[name='feeOptions']:checked").val());
            $("#suggest_rmb_price").val(((1 + fee_rate) * after_tax * rate).toFixed(2));
        }
    }
});