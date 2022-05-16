import { Task } from '../interface/task';
import { Injectable } from '@angular/core';
import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  DocumentReference,
  Firestore,
  collection
} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: Firestore) { }

  async getTaskById(id: string): Promise<Task>{
    const ref: DocumentReference<unknown> = doc(this.firestore, 'tasks', id);
    const data = await getDoc(ref);
    let task: Task = Object.assign({id: id}, data.data() as Task);
    return task;
  }

  addData(value: any){
    const dbInstance = collection(this.firestore, 'tasks');
    addDoc(dbInstance, value)
      .then( () =>{
        alert('Tarea añadida con éxito')
      })
      .catch((err:{ message : any; })=>{
        alert(err.message)
      })
  }

  async getData(): Promise<Task[]>{
    const dbInstance = collection(this.firestore, 'tasks');
    let list: any = [];
    const resp = await getDocs(dbInstance);
    if(resp.docs){
      list = [...resp.docs.map((item)=>{
        return {...item.data(), id:item.id}
      })]
      return list;
    }
    return [];
  }

  updateData(id: string, data: Task){
    const dataToUpdate = doc(this.firestore, 'tasks', id);
    updateDoc(dataToUpdate,{
      title: data.title,
      date: data.date,
      desc: data.desc,
      done: data.done
    })
      .then(()=>{
        alert('Tarea actualizada con éxito')
        this.getData()
      })
      .catch((err: {message :any})=>{
        alert(err.message)
      })
  }

  deleteData(id: string){
    const dataToDelete = doc(this.firestore, 'tasks', id);
    deleteDoc(dataToDelete)
    .then(()=>{
      alert('Tarea borrada con éxito');
    })
    .catch((err: {message:any})=>{
      alert(err.message);
    })
  }
}
