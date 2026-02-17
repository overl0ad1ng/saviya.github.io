export default function rubyPlugin(md) {
    // 匹配规则: [内容]{rt:"注音"}
    // \[(.*?)\] 匹配括号内的文本
    // \{rt:"(.*?)"\} 匹配注音内容
    const rubyRegex = /\[([^\]]+)\]\{rt:"([^"]+)"\}/;
    
    md.inline.ruler.before('emphasis', 'ruby_markup', (state, silent) => {
        const max = state.posMax;
        const start = state.pos;
        
        // 检查是否以 '[' 开头
        if (state.src.charCodeAt(start) !== 0x5B /* [ */) return false;
        
        // 获取剩余字符串进行正则匹配
        const tail = state.src.slice(start);
        const match = tail.match(rubyRegex);
        
        if (match && match.index === 0) {
            if (!silent) {
                // 创建一个新的 token
                const token = state.push('ruby_open', 'ruby', 1);
                
                // 解析中间的内容 (支持嵌套行内语法，如加粗等)
                const contentToken = state.push('text', '', 0);
                contentToken.content = match[1];
                
                // 创建 rt 标签
                state.push('rt_open', 'rt', 1);
                const rtContent = state.push('text', '', 0);
                rtContent.content = match[2];
                state.push('rt_close', 'rt', -1);
                
                state.push('ruby_close', 'ruby', -1);
            }
            
            // 移动解析指针到匹配结束的位置
            state.pos += match[0].length;
            return true;
        }
        
        return false;
    });
}