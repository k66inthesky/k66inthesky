import re

# 读取 README.md 文件的内容
with open('README.md', 'r') as readme_file:
    readme_content = readme_file.read()

# 匹配 {label_feed_cnt} 的行
label_cnt_regex = r'{label_feed_cnt}'
match_result = re.search(label_cnt_regex, readme_content)

if match_result:
    match_text = match_result.group(0)
    current_cnt = int(re.search(r'\d+', match_text).group(0))
    new_cnt = current_cnt + 1

    # 更新 README.md 中的 {label_feed_cnt} 为新的值
    updated_content = readme_content.replace(label_cnt_regex, str(new_cnt))

    # 写回 README.md 文件
    with open('README.md', 'w') as updated_readme:
        updated_readme.write(updated_content)

    print(f'label_feed_cnt 已更新为: {new_cnt}')
else:
    print('未找到匹配项: {label_feed_cnt}')
