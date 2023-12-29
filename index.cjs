// https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js
// https://www.conventionalcommits.org/zh-hans/v1.0.0/

module.exports = {
    extends: ["@commitlint/config-conventional"],
    prompt: {
        questions: {
            type: {
                description: "选择提交类型",
                enum: {
                    feat: {
                        description:
                            "新增了一个功能（这和语义化版本中的 MINOR 相对应）；",
                        title: "✨ 新增功能",
                        emoji: "✨",
                    },
                    fix: {
                        description:
                            "修复了一个 BUG（这和语义化版本中的 PATCH 相对应）；",
                        title: "🐛 修复缺陷",
                        emoji: "🐛",
                    },
                    docs: {
                        description:
                            "用于修改文档，例如修改 README 文件、API 文档等；",
                        title: "📚 文档更新",
                        emoji: "📚",
                    },
                    style: {
                        description:
                            "用于修改代码的样式，例如调整缩进、空格、空行等；",
                        title: "💎 代码格式",
                        emoji: "💎",
                    },
                    refactor: {
                        description:
                            "用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑；",
                        title: "📦 代码重构",
                        emoji: "📦",
                    },
                    perf: {
                        description:
                            "用于优化性能，例如提升代码的性能、减少内存占用等；",
                        title: "🚀 性能提升",
                        emoji: "🚀",
                    },
                    test: {
                        description:
                            "用于修改测试用例，例如添加、删除、修改代码的测试用例等；",
                        title: "🚨 测试相关",
                        emoji: "🚨",
                    },
                    build: {
                        description:
                            "用于修改项目构建系统，例如修改依赖库、外部接口或者升级 Node 版本等；",
                        title: "🛠 构建相关",
                        emoji: "🛠",
                    },
                    ci: {
                        description:
                            "用于修改持续集成流程，例如修改 Travis、Jenkins 等工作流配置；",
                        title: "⚙️ 持续集成",
                        emoji: "⚙️",
                    },
                    chore: {
                        description:
                            "用于对非业务性代码进行修改，例如修改构建流程或者工具配置等；",
                        title: "♻️ 其他修改",
                        emoji: "♻️",
                    },
                    revert: {
                        description: "恢复以前的提交；",
                        title: "🗑 回退代码",
                        emoji: "🗑",
                    },
                },
            },
            scope: {
                description: "填写提交范围",
            },
            subject: {
                description: "填写提交主题 (必填)",
            },
            body: {
                description: "填写提交明细",
            },
            isBreaking: {
                description: "破坏性变更？",
            },
            breakingBody: {
                description: "请详细描述破坏性变更",
            },
            breaking: {
                description: "破坏性变更描述",
            },
            isIssueAffected: {
                description: "影响待解决的 ISSUES",
            },
            issuesBody: {
                description: "请详细描述如何解决的 ISSUES",
            },
            issues: {
                description: '添加 ISSUES 引用(例如"fix #123", "re #123")',
            },
        },
    },
};
