import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: any[] = [];

  constructor(private alertCTRL: AlertController, private toastCTRL: ToastController) {

  }
  async showAdd() {
    const alert = await this.alertCTRL.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'Comprar pão'
        }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'sencondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            this.add(form.taskToDo);
          }
        }]
    });
    await alert.present();
  }
  async add(taskToDo: string) {
    if (taskToDo.trim().length < 1) {
      const toast = await this.toastCTRL.create({
        message: 'Informe o que deseja fazer!',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      return;
    }
    let task = { name: taskToDo, done: false };

    this.tasks.push(task);
  }
}
