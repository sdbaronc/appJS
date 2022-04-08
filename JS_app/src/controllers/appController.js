/* jshint esversion: 6 */
/* jshint browser: true */

const { render } = require('ejs');
const express = require('express');

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
//////////////////////////////////usuarios////////////////////////////////////////////
////////////////////////////////ordenes de compra y facturas/////////////////////////
controller.register = (req, res) => {
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
    res.render('register.ejs', { data: config });
};

controller.login = (req, res) => {
    const config = {
        nav: "register",
        navContent: {
            title: "HTML 5: Register",
            link_1: {
                href: "/index",
                text: "Home"
            },
            link_2: {
                href: "/register",
                text: "Register"
            },
        }
    }; 
    res.render("login.ejs", { data: config });
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

controller.registerInsert = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {        
        conn.query('INSERT INTO user SET ?', [data], (err, rows) => {
            console.log(rows);
            if (err) {
                res.send(err);
            }
            res.send(data);
        });
    });    
};

module.exports = controller;