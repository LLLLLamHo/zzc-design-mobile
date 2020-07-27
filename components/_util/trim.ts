export default function trim(type: 'start' | 'end' | 'all', value: String): String {
    switch (type) {
        case 'start': value = value.replace(/(^\s*)/g,"");
        break;
        case 'end': value = value.replace(/(\s*$)/g,"");
        break;
        default : value = value.replace(/(^\s*)|(\s*$)/g, "");
    }
    return value;
}