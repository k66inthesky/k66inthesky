# 读取 README.md 文件的内容
with open('README.md', 'r') as readme_file:
    readme_content = readme_file.read()

# 定义要查找的字符串
search_string = '{label_feed_cnt}'

# 如果查找字符串在 README.md 中存在
if search_string in readme_content:
    # 使用 split 分割字符串并获取 {label_feed_cnt} 后面的部分
    parts = readme_content.split(search_string, 1)
    # 如果成功分割，parts[1] 将包含 {label_feed_cnt} 后面的内容
    if len(parts) > 1:
        rest_of_content = parts[1]
        # 从后面的内容中提取数字
        current_cnt = int(''.join(filter(str.isdigit, rest_of_content)))
        new_cnt = current_cnt + 1

        # 替换 {label_feed_cnt} 为新的值
        updated_content = readme_content.replace(search_string, f'{{label_feed_cnt{new_cnt}}}')

        # 写回 README.md 文件
        with open('README.md', 'w') as updated_readme:
            updated_readme.write(updated_content)

        print(f'label_feed_cnt 已更新为: {new_cnt}')
    else:
        print('未找到匹配项: {label_feed_cnt}')
else:
    print('未找到匹配项: {label_feed_cnt}')
