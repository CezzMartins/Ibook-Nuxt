interface Category{
    id: number
    name: string
}
interface Page{
    id: number
    pageNumber: number
}

export interface Book{
    id: number
    author: string
    title: string
    cover:string
    releaseDate:string
    description:string
    category: Category[]
    pages: Page[]
}