abstract class Person {
  protected name: string;
  protected cpf: string;
  protected address: string;
  protected email: string;
  protected phone: string;
  protected birthday: Date;

  protected getName(): string {
    return this.name;
  }

  protected setName(name: string): void {
    this.name = name;
  }

  protected getCpf(): string {
    return this.cpf;
  }

  protected setCpf(cpf: string): void {
    //TODO validate cpf
    //TODO tranform cpf to XXX.XXX.XX-XX. Maybe implemment this on front end instead....
    this.cpf = cpf;
  }

  protected getEmail(): string {
    return this.email;
  }

  protected setEmail(email: string): void {
    this.email = email;
  }

  protected getPhone(): string {
    return this.phone;
  }

  protected setPhone(phone: string): void {
    this.phone = phone;
  }

  protected getBirthday(): Date {
    return this.birthday;
  }

  protected setBirthday(birthday: Date) {
    this.birthday = birthday;
  }
}
