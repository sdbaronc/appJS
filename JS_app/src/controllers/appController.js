/* jshint esversion: 6 */
/* jshint browser: true */

const { render } = require('ejs');
const express = require('express');
const con = require('../keys');
const alert = require('alert');
const { Console } = require('console');



const controller = {};
///////////////////////////////////////////index/////////////////////
controller.index = (req, res) => {
    const config = {
        nav: "index",
        navContent: {
            title: "Bienvenido a S.I.A.P.",
            link_1: {
                href: "/registroClientes",
                text: "Registro de Clientes"
            },
            link_2: {
                href: "/registroItems",
                text: "Rgistro de Productos"
            },
            link_3: {
                href: "/listaClientes",
                text: "Ver Lista de Clientes"
            },
            link_4: {
                href: "/listaItems",
                text: "Ver Lista de Productos"
            }
        }
    };    
    res.render('index.ejs', { data: config });
};

////////////////////////////////////////////clientes////////////////////////
controller.registroClientes = (req, res) => {
    const config = {
        nav: "index",
        navContent: {
            title: "SIAP: Registro de Clientes",
            link_1: {
                href: "/index",
                text: "Regresar"
            },
            link_2: {
                href: "/registroItems",
                text: "Rgistro de Productos"
            },
            link_3: {
                href: "/listaClientes",
                text: "Ver Lista de Clientes"
            },
            link_4: {
                href: "/listaItems",
                text: "Ver Lista de Productos"
            }
        }
    };    
    res.render('registroClientes.ejs', { data: config });
};
controller.listaClientes = (req, res) => {
    const config = {
        nav: "index",
        navContent: {
            title: "SIAP: Lista de Clientes",
            link_1: {
                href: "/index",
                text: "Regresar"
            },
            link_2: {
                href: "/registroItems",
                text: "Rgistro de Productos"
            },
            link_3: {
                href: "/regitroClientes",
                text: "Registro de Clientes"
            },
            link_4: {
                href: "/listaItems",
                text: "Ver Lista de Productos"
            }
        }
    };    
    res.render('listaClientes.ejs', { data: config });
};
controller.editarClientes = (req, res) => {
    const config = {
        nav: "index",
        navContent: {
            title: "SIAP: Lista de Clientes",
            link_1: {
                href: "/index",
                text: "Regresar"
            },
            link_2: {
                href: "/registroItems",
                text: "Rgistro de Productos"
            },
            link_3: {
                href: "/regitroClientes",
                text: "Registro de Clientes"
            },
            link_4: {
                href: "/listaItems",
                text: "Ver Lista de Productos"
            }
        }
    };    
    res.render('editarClientes.ejs', { data: config });
};





//////////////////////////////////////////////items//////////////////////////////
controller.registroItems = (req, res) => {
    const config = {
        nav: "index",
        navContent: {
            title: "SIAP: Regitro de Productos",
            link_1: {
                href: "/index",
                text: "Regresar"
            },
            link_2: {
                href: "/registroClientes",
                text: "Rgistro de Clientes"
            },
            link_3: {
                href: "/listaClientes",
                text: "Ver Lista de Clientes"
            },
            link_4: {
                href: "/listaItems",
                text: "Ver Lista de Productos"
            }
        }
    };    
    res.render('registroItems.ejs', { data: config });
};
controller.listaItems = (req, res) => {
    const config = {
        nav: "index",
        navContent: {
            title: "SIAP: Lista de Productos",
            link_1: {
                href: "/index",
                text: "Regresar"
            },
            link_2: {
                href: "/registroClientes",
                text: "Rgistro de Clientes"
            },
            link_3: {
                href: "/listaClientes",
                text: "Ver Lista de Clientes"
            },
            link_4: {
                href: "/registroItems",
                text: "Registro de Productos"
            }
        }
    };    
    res.render('listaItems.ejs', { data: config });
};
controller.registrarItem = (req, res) => {
    
    
        
    let data = {nombre:req.body.nombre, descripcion:req.body.descripcion, stock:0, precio:req.body.precio };
    let sql = "INSERT INTO PRODUCTOS SET ?";
    
    con.query(sql, data, function (error, results) {
        res.render('registroItems.ejs');
        if(error){
           
            alert('Ups! Tuvimos problemas al realizar el registro del producto, revisa los campos ingresados, seguramente algunos ya están en uso y si el problema persiste contácte con el personal de soporte técnico');
        }else{
            alert('Registro realizado exitosamente!');
        }
    });
};
//////////////////////////////////usuarios////////////////////////////////////////////

controller.login = (req, res) => {
    const user = req.body.correo;
    const pass = req.body.password;
    console.log(pass);

    //Invoke crypto

    const crypto = require('crypto');

    let encryptPassword = crypto.createHash("sha256").update(pass).digest('hex');
    

    con.query('SELECT * FROM USUARIOS WHERE CORREO = ? AND PASSWORD = ?', [user, encryptPassword], async(error, results)=>{
        if (results.length > 0){
            console.log(results);
            if (results[0].estado == '1'){
                if (results[0].departamento== '1'){
                    res.render('vistaAdmin.ejs');
                }else{
                    res.render('listaClientes.ejs');
                }
            }else{
                res.render('index.ejs');
                alert('Tu cuenta se encuentra actualmente actualmente en mantenimiento o dada de baja en el sistema, por favor contáctate el personal de soporte técnico!');
            }
        }else{
            res.render('index.ejs');
            alert('Usuario y/o contraseña incorrecta!');
        }
    });

};

controller.registrarUsuario = (req, res) => {
    const area = req.body.area;
    const status = req.body.status;
    
    if (area != 0 && status != 0){
        const patternEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const patternPassword = new RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/);
        
        const pass = req.body.password;
        const email = req.body.correo; 

        if (patternEmail.test(email)){
            if(pass.length > 8 && patternPassword.test(pass)){

                //Invoke crypto

                const crypto = require('crypto');

                let encryptPassword = crypto.createHash("sha256").update(pass).digest('hex');

                let data = {nombre:req.body.nombre ,correo:req.body.correo, cedula:req.body.cedula, direccion:req.body.direccion , telefono:req.body.telefono, departamento:req.body.departamento, estado:1, password:encryptPassword};
                let sql = "INSERT INTO USUARIOS SET ?";

                con.query(sql, data, function (error, results) {
                    
                    res.render('registroUsuario.ejs');
                    if(error){
                        throw error;
                        alert('Ups! Tuvimos problemas al realizar el registro del cliente, revisa los campos ingresados, seguramente algunos ya están en uso y si el problema persiste contácte con el personal de soporte técnico');
                    }else{
                        alert('Registro realizado exitosamente!');
                    }
                });
            }else{
                alert("La contraseña no es válida! Esta debe tener más de ocho caracteres, incluir al menos una letra en minúscula y una en mayúscula, incluir un número y un caracter especial, entre estos últimos están únicamente los siguientes !@#$%^&*");
            }
        }else{
            alert("La dirección de correo electrónico ingresada no es válida!");
        }
    }else{
        alert("Por favor, selecciona una opción para cada una de las secciones desplegables!");
    }
}







controller.vistaAdmin = (req, res) => {
    const config = {
        nav: "index",
        navContent: {
            title: "SIAP: Lista de Productos",
            link_1: {
                href: "/index",
                text: "Regresar"
            },
            link_2: {
                href: "/registroClientes",
                text: "Rgistro de Clientes"
            },
            link_3: {
                href: "/listaClientes",
                text: "Ver Lista de Clientes"
            },
            link_4: {
                href: "/registroItems",
                text: "Registro de Productos"
            }
        }
    };    
    res.render('vistaAdmin.ejs', { data: config });
};



////////////////////////////////ordenes de compra y facturas/////////////////////////
controller.registroUsuario = (req, res) => {
    // console.log(req.body);
    // const { id } = req.body;
    // console.log(id);
    // res.send(`regiter: ${id}`);
    const config = {
        nav: "register",
        navContent: {
            title: "HTML 5: Register",
            link_1: {
                href: "/index",
                text: "Home"
            },
            link_2: {
                href: "/login",
                text: "Login"
            }
            
        }
    };  
    res.render('registroUsuario.ejs', { data: config });
};



controller.registerSelect = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, rows) => {
            if (err) {
                res.send(err);
            }

            const config = {
                nav: "registerlist",
                navContent: {
                    title: "HTML 5: List",
                    link_1: {
                        href: "/index",
                        text: "Home"
                    },
                    link_2: {
                        href: "/login",
                        text: "Login"
                    }
                },
                database: rows
            }; 
            res.render('registerlist', { data: config });
        });
    });
};

controller.registrarClientes = (req, res) => {
    const patternEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const correo = req.body.correo;
    if (patternEmail.test(correo)){
        let data = {nit:req.body.nit, nombre:req.body.nombre, direccion:req.body.ubica , correo:req.body.correo, telefono:req.body.telefono};
        let sql = "INSERT INTO CLIENTES SET ?";

        con.query(sql, data, function (error, results) {
            res.render('registroClientes.ejs');
            if(error) {
                
               alert('Ups! Tuvimos problemas al realizar el registro del cliente, revisa los campos ingresados, seguramente algunos ya están en uso y si el problema persiste contácte con el personal de soporte técnico');
            }else{
                alert('Registro realizado exitosamente!');
            }
        });
    }else{
        alert("La dirección de correo electrónico ingresada no es válida!");
    }
};

module.exports = controller;