import { VocabCategory } from "@/shared/models"
import VocabCategoryCard from "./_components/VocabCategoryCard"

const VocabCategoriesPage = async () => {

    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('hi from server')

    const initialVocabCategories: VocabCategory[] = [
        {
            id: 'sdfasfsdfsdfs1',
            level: 'EASY',
            enCategoryName: 'Vehicle',
            thCategoryName: 'ยานพาหนะ',
            categoryCoverImage: 'https://png.pngtree.com/png-clipart/20250111/original/pngtree-a-red-suv-car-in-side-view-png-image_20147947.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs2',
            level: 'MEDIUM',
            enCategoryName: 'Fruits',
            thCategoryName: 'ผลไม้',
            categoryCoverImage: 'https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-juicy-fruits-and-vitamins-natural-organic-fruits-png-image_13146415.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs3',
            level: 'HARD',
            enCategoryName: 'Food & Drinks',
            thCategoryName: 'อาหารและเครื่องดื่ม',
            categoryCoverImage: 'https://png.pngtree.com/png-clipart/20240103/original/pngtree-group-of-fast-food-products-png-image_14008130.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs4',
            level: 'EASY',
            enCategoryName: 'Places',
            thCategoryName: 'สถานที่',
            categoryCoverImage: 'https://cdn-icons-png.flaticon.com/512/7429/7429878.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs5',
            level: 'EASY',
            enCategoryName: 'Animals',
            thCategoryName: 'สัตว์',
            categoryCoverImage: 'https://static.vecteezy.com/system/resources/previews/047/493/607/non_2x/a-collection-of-different-animals-free-png.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs6',
            level: 'HARD',
            enCategoryName: 'Body Parts',
            thCategoryName: 'ส่วนต่างๆของร่างกาย',
            categoryCoverImage: 'https://www.graphicsfuel.com/wp-content/uploads/2020/10/Human-Body-Icons-Color.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs7',
            level: 'MEDIUM',
            enCategoryName: 'Colors',
            thCategoryName: 'สี',
            categoryCoverImage: 'https://static.vecteezy.com/system/resources/thumbnails/028/753/829/small_2x/color-palette-3d-icon-illustration-png.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs10',
            level: 'MEDIUM',
            enCategoryName: 'Clothes',
            thCategoryName: 'เสื้อผ้า',
            categoryCoverImage: 'https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-clothing-garment-apparel-png-image_11576281.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs8',
            level: 'EASY',
            enCategoryName: 'Family Members',
            thCategoryName: 'สมาชิกในครอบครัว',
            categoryCoverImage: 'https://static.vecteezy.com/system/resources/previews/051/337/778/non_2x/happy-asian-family-enjoying-quality-time-together-on-a-transparent-background-with-their-young-children-happy-asian-family-isolated-on-transparent-background-happy-family-enjoying-together-free-png.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 'sdfasfsdfsdfs9',
            level: 'EASY',
            enCategoryName: 'Weather',
            thCategoryName: 'สภาพอากาศ',
            categoryCoverImage: 'https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png',
            vocabQty: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]

    return (
        <div className="pt-38 pb-24">
            {/* <h1 className="my-10 text-center text-3xl">หมวดคำศัพท์</h1> */}
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 mt-10 gap-5 xl:px-32 xs:px-6">
                {
                    initialVocabCategories.map(
                        (vocabCategory) =>
                            <VocabCategoryCard key={vocabCategory.id} props={vocabCategory} />
                    )
                }
            </div>
        </div>
    )
}

export default VocabCategoriesPage