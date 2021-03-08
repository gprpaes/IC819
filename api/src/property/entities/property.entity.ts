import { v4 as uuid } from 'uuid';
export class Property {
  private id: string;
  private name: string;
  private cnpj: string;
  private propertyType: string;
  private address: string;
  private roomAmount: number;

  constructor(name, cnpj, propertyType, address, roomAmount) {
    this.setName(name);
    this.setCnpj(cnpj);
    this.setPropertyType(propertyType);
    this.setAddress(address);
    this.setRoomAmount(roomAmount);
  }

  private getId(): string {
    return this.id;
  }

  private setId(id: string): void {
    this.id = id;
  }

  private getName(): string {
    return this.name;
  }

  private setName(name: string): void {
    this.name = name;
  }

  private getCnpj(): string {
    return this.cnpj;
  }

  private setCnpj(cnpj: string): void {
    this.cnpj = cnpj;
  }

  private getPropertyType(): string {
    return this.propertyType;
  }

  private setPropertyType(propertyType: string): void {
    this.propertyType = propertyType;
  }

  private getAddress(): string {
    return this.address;
  }

  private setAddress(address: string): void {
    this.address = address;
  }

  private getRoomAmount(): number {
    return this.roomAmount;
  }

  private setRoomAmount(roomAmount: number): void {
    this.roomAmount = roomAmount;
  }
}
