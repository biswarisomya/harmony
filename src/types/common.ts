export interface Id{
    id: string;
}

export interface Paranoid {
    createdBy ?: string;
    updatedBy ?: string;
    deletedAt ?: Date;
    createdAt ?: Date;
    updatedAt ?: Date;
}