"use strict";

module.exports.rules = {
    "webresource-accessibility": context => (
        {
            MethodDefinition: (node) => {
                if (!node.accessibility) {
                    context.report(
                        {
                            node: node,
                            message:
                                "Use accessibility modifier on method definition {{name}} in webresource scripts!",
                            data: {
                                name: node.key.name,
                            }
                        }
                    );
                }
            },
            ClassProperty: (node) => {
                if (!node.accessibility) {
                    context.report(
                        {
                            node: node,
                            message:
                                "Use accessibility modifier on class property {{name}} in webresource scripts!",
                            data: {
                                name: node.key.name,
                            }
                        }
                    );
                }
            }
        }
    ),
    "webresource-static": context => (
        {
            MethodDefinition: (node) => {
                if (!node.static) {
                    context.report(
                        {
                            node: node,
                            message:
                                "Use static modifier on method definition {{name}} in webresource scripts!",
                            data: {
                                name: node.key.name,
                            }
                        }
                    );
                }
            },
            ClassProperty: (node) => {
                if (!node.static) {
                    context.report(
                        {
                            node: node,
                            message:
                                "Use static modifier on class property {{name}} in webresource scripts!",
                            data: {
                                name: node.key.name,
                            }
                        }
                    );
                }
            }
        }
    ),
    "webresource-referrer": context => (
        {
            ThisExpression: (node) => {
                context.report(
                    {
                        node: node,
                        message: "Do not use 'this.' in webresource scripts!"
                    }
                );
            },
            SuperExpression: (node) => {
                context.report(
                    {
                        node: node,
                        message: "Do not use 'super.' in webresource scripts!"
                    }
                );
            }
        }
    )
};