import Image from 'next/image'
import { currency, isNew } from '../utils'

interface IProductCardProps {
  product: any
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <a href={`/product/${product.id}`} className="card bg-base-100 shadow-xl">
      <figure>
        <Image className="object-cover w-full h-44" src={product.image} alt="Imagem do produto" />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title">
          {product.name}
          {isNew(product.createdAt) && <div className="badge badge-secondary">NOVO</div>}
        </h2>
        <p>{product.description}</p>
        <div className="font-bold">{currency(product.price)}</div>
        <div className="rating rating-xs">
          <input type="radio" name="rating-{{this.id}}" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-{{this.id}}" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-{{this.id}}" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-{{this.id}}" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-{{this.id}}" className="mask mask-star-2 bg-orange-400" />
        </div>
      </div>
    </a>
  )
}
