CREATE DATABASE base_de_datos;
USE base_de_datos;

CREATE DATABASE base_de_datos;
USE base_de_datos;

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(200),
  contrasena VARCHAR(200),
  foto_perfil VARCHAR(200),
  fecha_nacimiento DATE,
  dni INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT,
  nombre VARCHAR(200),
  descripcion TEXT,
  img_productos VARCHAR(200),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE comentarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_post INT,
  id_usuario INT,
  texto_comentario TEXT,
  FOREIGN KEY (id_post) REFERENCES productos(id),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* 5 USUSARIOS */
insert into usuarios values 
(default,"salamaleco@gmail.com","BombIran","images/userImage.jpg",'2003-02-02',45075332,default,default);

insert into usuarios values 
(default,"MorganFreeman32@gmail.com","Boca12","images/userImage.jpg",'2002-02-02',45075331,default,default);

insert into usuarios values 
(default,"PelusaX@gmail.com","Buendia","images/userImage.jpg",'2001-02-02',45075330,default,default);

insert into usuarios values 
(default,"LupoElGrande@gmail.com","BuenasNoches","images/userImage.jpg",'2000-02-02',45075339,default,default);

insert into usuarios values 
(default,"TioGrandpa4500@gmail.com","BuenasTardes","images/userImage.jpg",'2001-02-02',45075338,default,default);

/* 10 POSTEOS */
insert into productos values 
(default,1,"Pikachu","Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia","/images/pika.png",default,default);

insert into productos values 
(default,2,"Slowpoke","Slowpoke (ヤドン Yadon en japonés) es un Pokémon de tipo agua/psíquico introducido en la primera generación.","/images/slowpoke.jpg",default,default);

insert into productos values 
(default,3,"Charmander","Charmander (ヒトカゲ Hitokage en japonés) es un Pokémon de tipo fuego introducido en la primera generación.","/images/charmander.jpg",default,default);

insert into productos values 
(default,4,"Master Ball","Es la mejor de todas, ya que gracias a su ratio de captura nunca falla. Capturará a cualquier Pokémon sin importar el nivel, los PS o problemas de estado que posea.","/images/master ball.webp",default,default);

insert into productos values 
(default,5,"Ultra Ball","Tipo de Poké Ball introducido en la primera generación. Tiene más índice de éxito que la Super Ball. Por ende, es la más eficaz en el uso general.","/images/ultra.webp",default,default);

insert into productos values 
(default,1,"Bulbasaur","Bulbasaur (フシギダネ Fushigidane en japonés) es un Pokémon de tipo planta/veneno introducido en la primera generación.","/images/bulbasaur.png",default,default);

insert into productos values 
(default,2,"Eve","Eevee (イーブイ Eievui en japonés) es un Pokémon de tipo normal introducido en la primera generación.","/images/eve.png",default,default);

insert into productos values 
(default,3,"Vaporeon","Vaporeon (シャワーズ Showers en japonés) es un Pokémon de tipo agua introducido en la primera generación.","/images/vaporeon.png",default,default);

insert into productos values 
(default,4,"Blastoise","Blastoise es un Pokémon de tipo agua introducido en la primera generación. Es la evolución de Wartortle.","/images/blastoise.png",default,default);

insert into productos values 
(default,5,"Rayquaza","Rayquaza (レックウザ Rayquaza en japonés) es un Pokémon legendario de tipo dragón/volador introducido en la tercera generación.","/images/rayquaza.png",default,default);

/* 40 COMENTARIOS */

insert into comentarios values 
(default,1,1,"Gran producto me ayudo mucho",default,default);

insert into comentarios values 
(default,2,2,"Recomendado para la casa",default,default);

insert into comentarios values 
(default,3,3,"Malisimo, me revento el microndas",default,default);

insert into comentarios values 
(default,4,4,"Producto mediocre, gaste 3 masterballs y no funcionaron",default,default);

insert into comentarios values 
(default,5,5,"Excelente compania en el ambito laboral",default,default);

insert into comentarios values 
(default,6,1,"No recomendable, deja pelos por todas partes",default,default);

insert into comentarios values 
(default,7,2,"Me hace las cuentas y paga los impuestos",default,default);

insert into comentarios values 
(default,8,3,"Excelente producto! A la primera masterball lo atrape",default,default);

insert into comentarios values 
(default,9,4,"Abstenerse curiosos, consumen demasiada comida",default,default);

insert into comentarios values 
(default,10,5,"Muy bueno para los jovenes",default,default);

insert into comentarios values 
(default,1,1,"pReSio?",default,default);

    insert into comentarios values (default,2,2,"Buenas?",default,default);
	insert into comentarios values (default,3,3,"Stock?",default,default);
    insert into comentarios values (default,4,4,"Buen dia",default,default);
    insert into comentarios values (default,5,5,"QUe onda?",default,default);
    insert into comentarios values (default,6,1,"Ratio",default,default);
    insert into comentarios values (default,7,2,"Quedan?",default,default);
    insert into comentarios values (default,8,3,"Volumen?",default,default);
    insert into comentarios values (default,9,4,"Area?",default,default);
    insert into comentarios values (default,10,5,"Permutas?",default,default);
    insert into comentarios values (default,1,1,"Mercadopago?",default,default);
    insert into comentarios values (default,2,2,"Transferencia?",default,default);
    insert into comentarios values (default,3,3,"Aceptas oro?",default,default);
    insert into comentarios values (default,4,4,"pReSio?",default,default);
    insert into comentarios values (default,5,5,"Contestas dm?",default,default);
    insert into comentarios values (default,6,1,"Llega a uru?",default,default);
    insert into comentarios values (default,7,2,"LLega a Bolivia?",default,default);
    insert into comentarios values (default,8,3,"Llega a peru?",default,default);
    insert into comentarios values (default,9,4,"LLega a mexico?",default,default);
    insert into comentarios values (default,10,5,"Llega a paraguay?",default,default);
    insert into comentarios values (default,1,1,"Se puede?",default,default);
    insert into comentarios values (default,2,2,"Sigue estando?",default,default);
    insert into comentarios values (default,3,3,"Sigue?",default,default);
    insert into comentarios values (default,4,4,"Toleran calor?",default,default);
    insert into comentarios values (default,5,5,"Toleran viento?",default,default);
    insert into comentarios values (default,6,1,"Toleran frio?",default,default);
    insert into comentarios values (default,7,2,"Que comen?",default,default);
    insert into comentarios values (default,8,3,"Que no comen?",default,default);
    insert into comentarios values (default,9,4,"Comen?",default,default);
    insert into comentarios values (default,10,5,"Gracias",default,default);








