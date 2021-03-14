
import PropertyType from '../../propertyType/propertyType'
import {PrimaryGeneratedColumn, Column, DeleteDateColumn, ManyToOne, Entity} from 'typeorm'
import User from '../../user/entities/user.entity';

@Entity()
export default class Property {
  @PrimaryGeneratedColumn("uuid")
  private id: string;

  @Column()
  private name: string;

  @ManyToOne(() => User, user => user.propertyCNPJ)
  public cnpj: string;

  @ManyToOne(() => PropertyType, propertyType => propertyType.properties)
  public propertyType: PropertyType;
  
  @Column()
  private address: string;

  @Column({name: 'room_amount'})
  private roomAmount: number;

  @Column({default: false})
  private deleted: boolean;

  @DeleteDateColumn({name: 'deleted_at'})
  private deletedAt: number;

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

  private getPropertyType(): PropertyType {
    return this.propertyType;
  }

  private setPropertyType(propertyType: PropertyType): void {
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

  private getDeleted(): boolean{
    return this.deleted;
  }

  private setDeleted(deleted: boolean): void{
      this.deleted = deleted
  }
}
