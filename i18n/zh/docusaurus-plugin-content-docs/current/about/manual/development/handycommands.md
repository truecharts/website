# 命令支票表

以下是一些很好的命令来跟踪：

**给予所有sh 文件执行权限：** `查找。 -name '*.sh' | xargs git update-index --chmod=+x`

**列出目录中所有已使用的仓库：** `查找。 -name 'value' aml' | xargs cat | grep "repository" | grep -v "{" | awk -F":"{ print $2 }' | grep -v '^$' | sort --unique`
