
export interface VocabCategory {
    id: string;
    level: string;
    thCategoryName: string;
    enCategoryName: string;
    categoryCoverImage: string | null;
    vocabQty: number;
    createdAt: Date;
    updatedAt: Date;
}