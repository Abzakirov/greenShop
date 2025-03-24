import React from "react";


export interface ComponentType {
    children: React.ReactNode
}

export interface FieldType {
    email?: string,
    password?: string
}

export interface RegisterType {
    name?: string,
    surname?: string,
    email?: string,
    password?: string,
    confirm?: string
}

export interface CategoryType {
    count?: number,
    created_at?: string,
    created_by?: string,
    route_path?: string
    title?: string,
    _id?: string

}

export interface QueryType<T> {
    isLoading: boolean,
    isError: boolean,
    data?: T
}

export interface DiscountType {
    discoount_up_to?: number,
    _id?: number
    poster_image_url?: string,
    title?: string
}