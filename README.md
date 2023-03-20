# template-npm-dev
A basic template for NPM package development:

1. Use pnmp as NPM package management tool

2. Support Typescript, Esmodule, and configure Jest accordingly.

3. Use Eslint as the code format checking tool and Prettier as the code format repair tool.


4. Configure Husky to submit standardized code: Before submitting, the staging area code is checked and low-level errors are automatically fixed. Submission information will then be checked to see if it meets the criteria for Commitlink configuration. Finally, the unit tests are automatically executed and, if passed, can be submitted successfully.



## npm包开发的基本模板：

1. 使用pnmp作为npm包管理工具

2. 支持Typescript、Esmodule，并配置相应的Jest。

3. 使用Eslint作为代码格式检查工具，使用Prettier作为代码格式修复工具。

4. 配置Husky以标准化代码提交：提交前，将检查暂存区代码，并自动修复低级错误。然后，将检查提交信息，看看它是否符合Commitlint配置的标准。最后，单元测试将自动执行，如果通过，则可成功提交。



Angular 规范说明：

- feat：新功能
- fix：修补 BUG
- docs：修改文档，比如 README, CHANGELOG, CONTRIBUTE 等等
- style：不改变代码逻辑 (仅仅修改了空格、格式缩进、逗号等等)
- refactor：重构（既不修复错误也不添加功能）
- perf：优化相关，比如提升性能、体验
- test：增加测试，包括单元测试、集成测试等
- build：构建系统或外部依赖项的更改
- ci：自动化流程配置或脚本修改
- chore：非 src 和 test 的修改，发布版本等
- revert：恢复先前的提交