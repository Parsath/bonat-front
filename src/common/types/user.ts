interface AddressType {
  street: string
  suite: string
  city: string
  zipcode: string
}

export interface UserType {
  id: string
  name: string
  email: string
  address: AddressType
  phone: string
  website: string
  companyName: string
}
