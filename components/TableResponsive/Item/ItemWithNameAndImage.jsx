import loadable from '@loadable/component'

const Image = loadable(()=>import("next/image"))

export default function ItemWithNameAndImage(name, image, alt, key){
  return(
    <div className="flex items-center" key={key}>
      <div className="mr-2">
        <Image alt={alt} height={28} width={28} className="rounded-full" src={image}/>
      </div>
      <span>{name}</span>
    </div>
  )
}