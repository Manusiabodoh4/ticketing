export default function ItemLabelWithColor(text, bg_color, text_color, key){
  return <span key={key} className={`${bg_color} ${text_color} py-1 px-3 rounded-full text-xs`}>{text}</span>
}