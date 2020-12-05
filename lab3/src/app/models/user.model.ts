export class User {
  name: string;
  age: number;
  sex: string;
  country: string;
  city: string;

  constructor(name: string,
              age: number,
              sex: string,
              country: string,
              city: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.country = country;
    this.city = city;
  }
}
