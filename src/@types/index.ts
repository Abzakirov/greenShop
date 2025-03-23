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
