$.validator.setDefaults({
    ignore: ":hidden, [contenteditable='true']:not([name])",
    highlight: function (e) {
        $(e).closest(".form-group").removeClass("has-success").addClass("has-error")
    },
    success: function (e) {
        e.closest(".form-group").removeClass("has-error").addClass("has-success")
    },
    errorElement: "span",
    errorPlacement: function (e, r) {
        e.appendTo(r.is(":radio") || r.is(":checkbox") ? r.parent().parent().parent() : r.parent())
    },
    errorClass: "help-block m-b-none",
    validClass: "help-block m-b-none"
}), jQuery.validator.addMethod("regex", function (value, element, params) {
    var exp = new RegExp(params);
    return exp.test(value)
}, "格式错误"), $().ready(function () {
    var e = "<i class='fa fa-times-circle'></i> ";
    $("#addTagForm").validate({
        rules: {
            name: {
                required: !0,
            },
            flag: {
                required: !0,
            }
        },
        messages: {
            name: {
                required: e + "请输入标签名",
            },
            flag: {
                required: e + "请输入标签标识",
            }
        }
    });
    $("#editTagForm").validate({
        rules: {
            name: {
                required: !0,
            },
            flag: {
                required: !0,
            }
        },
        messages: {
            name: {
                required: e + "请输入标签名",
            },
            flag: {
                required: e + "请输入标签标识",
            }
        }
    });
    $("#addCategoryForm").validate({
        rules: {
            name: {
                required: !0,
            },
            flag: {
                required: !0,
            },
            keywords: {
                required: !0,
            },
            description: {
                required: !0,
            },
            pid: {
                required: !0,
            },
            sort: {
                required: !0,
            }
        },
        messages: {
            name: {
                required: e + "请输入栏目名",
            },
            flag: {
                required: e + "请输入栏目标识",
            },
            keywords: {
                required: e + "请输入关键词",
            },
            description: {
                required: e + "请输入描述",
            },
            pid: {
                required: e + "请选择父级栏目",
            },
            sort: {
                required: e + "请输入排序权重",
            }
        }
    });
    $("#editCategoryForm").validate({
        rules: {
            name: {
                required: !0,
            },
            flag: {
                required: !0,
            },
            keywords: {
                required: !0,
            },
            description: {
                required: !0,
            },
            pid: {
                required: !0,
            },
            sort: {
                required: !0,
            }
        },
        messages: {
            name: {
                required: e + "请输入栏目名",
            },
            flag: {
                required: e + "请输入栏目标识",
            },
            keywords: {
                required: e + "请输入关键词",
            },
            description: {
                required: e + "请输入描述",
            },
            pid: {
                required: e + "请选择父级栏目",
            },
            sort: {
                required: e + "请输入排序权重",
            }
        }
    });
    $("#addArticleForm").validate({
        rules: {
            title: {
                required: !0,
            },
            tag_ids: {
                required: !0,
            },
            category_id: {
                required: !0,
            },
            author: {
                required: !0,
            },
            content: {
                required: !0,
            },
            keywords: {
                required: !0,
            },
            status: {
                required: !0,
            }
        },
        messages: {
            title: {
                required: e + "请输入标签名",
            },
            category_id: {
                required: e + "请选择栏目",
            },
            tag_ids: {
                required: e + "请至少选择一个标签",
            },
            author: {
                required: e + "请输入作者",
            },
            content: {
                required: e + "请输入内容",
            },
            keywords: {
                required: e + "请输入关键词",
            },
            status: {
                required: e + "是否发布",
            }
        }
    });
    $("#editArticleForm").validate({
        rules: {
            title: {
                required: !0,
            },
            tag_ids: {
                required: !0,
            },
            category_id: {
                required: !0,
            },
            author: {
                required: !0,
            },
            content: {
                required: !0,
            },
            keywords: {
                required: !0,
            },
            status: {
                required: !0,
            }
        },
        messages: {
            title: {
                required: e + "请输入标签名",
            },
            category_id: {
                required: e + "请选择栏目",
            },
            tag_ids: {
                required: e + "请至少选择一个标签",
            },
            author: {
                required: e + "请输入作者",
            },
            content: {
                required: e + "请输入内容",
            },
            keywords: {
                required: e + "请输入关键词",
            },
            status: {
                required: e + "是否发布",
            }
        }
    });
    $("#addLinkForm").validate({
        rules: {
            name: {
                required: !0,
            },
            url: {
                required: !0,
            }
        },
        messages: {
            name: {
                required: e + "请输入友链名",
            },
            url: {
                required: e + "请输入友链地址",
            }
        }
    });
    $("#editLinkForm").validate({
        rules: {
            name: {
                required: !0,
            },
            url: {
                required: !0,
            }
        },
        messages: {
            name: {
                required: e + "请输入友链名",
            },
            url: {
                required: e + "请输入友链地址",
            }
        }
    })
});
