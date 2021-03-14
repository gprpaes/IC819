import Person from '../../person/person';
import Permission from '../../permissions/permissions';
import Property from '../../property/entities/property.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
@Entity()
export default class User extends Person {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column()
  private username: string;

  @OneToMany(
    () => Property,
    property => property.cnpj,
  )
  public propertyCNPJ: Property[];

  @Column()
  private position: string;

  @Column({ default: false })
  private isSuperUser: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  private parentUser: User;

  @ManyToOne(() => Permission, permission => permission.users)
  public permission: Permission;

  @Column()
  private blocked: boolean;

  @CreateDateColumn()
  private created: number;

  @DeleteDateColumn({ name: 'deleted_at' })
  private deletedAt: number;

  @Column({ default: false })
  private deleted: boolean;

  constructor(
    name,
    cpf,
    address,
    email,
    phone,
    birthday,
    username,
    isSuperUser,
    parentUser,
    permission?,
    blocked?,
    propertyCNPJ?,
    position?,
  ) {
    super();
    this.setUsername(username);
    this.setPropertyCNPJ(propertyCNPJ);
    this.setPosition(position);
    this.setIsSuperUser(isSuperUser);
    this.setParentUser(parentUser);
    this.setpermission(permission);
    this.setBlocked(blocked);
    this.setName(name);
    this.setCpf(cpf);
    this.setAddress(address);
    this.setEmail(email);
    this.setPhone(phone);
    this.setBirthday(birthday);
    this.setCreated();
  }

  private getId(): string {
    return this.id;
  }
  private setId(id: string): void {
    this.id = id;
  }
  private getUsername(): string {
    return this.username;
  }

  private setUsername(username: string): void {
    this.username = username;
  }

  private getPropertyCNPJ(): Property[] {
    return this.propertyCNPJ;
  }

  private setPropertyCNPJ(propertyCNPJ: Property[]): void {
    this.propertyCNPJ = propertyCNPJ;
  }
  private getPosition(): string {
    return this.position;
  }

  private setPosition(postion: string): void {
    this.position = this.position;
  }

  private getIsSuperUser(): boolean {
    return this.isSuperUser;
  }
  private setIsSuperUser(isSuperUser: boolean): void {
    this.isSuperUser = isSuperUser;
  }

  private getParentUser(): User {
    return this.parentUser;
  }

  private setParentUser(parentUser: User): void {
    this.parentUser = parentUser;
  }

  private getpermission(): Permission {
    return this.permission;
  }

  private setpermission(permission: Permission): void {
    this.permission = permission;
  }

  private getCreated(): Number {
    //TODO: Maybe implemment some convertion to object date??
    return this.created;
  }

  private setCreated(): void {
    this.created = Date.now();
  }

  private getDeleted(): boolean {
    return this.deleted;
  }

  private setDeleted(deleted: boolean): void {
    this.deleted = deleted;
  }

  private getDeletedAt(): number {
    return this.deletedAt;
  }

  private setDeletedAt(): void {
    this.deletedAt = Date.now();
  }

  private getBlocked(): boolean {
    return this.blocked;
  }

  private setBlocked(blocked: boolean = false): void {
    this.blocked = blocked;
  }
}
