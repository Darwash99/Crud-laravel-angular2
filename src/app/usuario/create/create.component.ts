import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  constructor(
    public usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Usuario:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Nombres:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Apellidos:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Tidentificacion:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Nidentificacion: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      Fechanacimiento: new FormControl('',Validators.required),
      Contrasena: new FormControl('',Validators.required)
      //email: new FormControl('', [ Validators.required, Validators.email ]),
      
    });
  }

  get f(){
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.usuarioService.create(this.form.value).subscribe(res => {
      console.log('Usuario creado Exitosamente!');
      this.router.navigateByUrl('usuario/index');
    })
  }
}
