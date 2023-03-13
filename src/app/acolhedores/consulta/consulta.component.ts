import { AfterViewInit, Component, Inject, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  dpto: string;
}

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'sistema-ivvcgrj-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  displayedColumns: string[] = ['select','nome', 'data'];
  dataSource: MatTableDataSource<UserData>;
  animal = '';
  name =  '';
  private paginator: MatPaginator;
  private sort: MatSort;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svc: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selection = new SelectionModel<any>(true, []);
  // eslint-disable-next-line @typescript-eslint/ban-types
  types: {} =
  [
    {id:1, tipo:2, nome:'Thiago Benetti', dpto:'Nucleo Operacional', data: '07/03/2023' },
    {id:2, tipo:1, nome:'Carlos Diniz', dpto:'TI - Sistemas', data: '07/03/2023' },
    {id:3, tipo:1, nome:'Paulo Machado', dpto:'TI - Sistemas', data: '07/03/2023' },
    {id:4, tipo:1, nome:'Irmão 01', dpto:'Acolhedores', data: '07/03/2023' },
    {id:5, tipo:1, nome:'Irmão 02', dpto:'Estacionamento', data: '07/03/2023' },
    {id:6, tipo:1, nome:'Irmão 03', dpto:'Diaconato', data: '07/03/2023' }
  ];
  constructor(
    public dialog: MatDialog,
    private router: Router



  ) {
    this.getUsuarios();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.paginator && this.sort) {
      // this.applyFilter(e);
    }
  }
  getUsuarios(): void {

        this.svc = this.types ? this.types : [];
        this.dataSource = new MatTableDataSource(this.svc ? this.svc : [] );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redirectAdd() {
    this.router.navigate(['/cadastro'])

  }
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    if (this.selection.selected.length > 0) {
       const numSelected = this.selection.selected.length;
       const numRows = this.dataSource.data.length;
       return numSelected === numRows;
    }
    return false
 }

 masterToggle() {
  if (this.isAllSelected()) {
    this.selection.clear();
    return;
  }

  this.selection.select(...this.dataSource.data);
}

 /** The label for the checkbox on the passed row */
 checkboxLabel(row?: any): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;


}

}
