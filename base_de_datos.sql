CREATE DATABASE base_de_datos;
USE base_de_datos;

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(200),
  username VARCHAR(200),
  contrasena VARCHAR(200),
  foto_perfil VARCHAR(200),
  fecha_nacimiento DATE,
  dni INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,
  nombre VARCHAR(200),
  descripcion TEXT,
  img_productos VARCHAR(200),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE comentarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  post_id INT,
  usuario_id INT,
  texto_comentario TEXT,
  FOREIGN KEY (post_id) REFERENCES productos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* 5 USUSARIOS */
insert into usuarios values 
(default,"salamaleco@gmail.com","MorganFreeman","BombIran","https://upload.wikimedia.org/wikipedia/commons/e/e4/Morgan_Freeman_Deauville_2018.jpg","2003-02-02",45075332,default,default);

insert into usuarios values 
(default,"MorganFreeman32@gmail.com","Obama","Boca12","https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg",'2002-02-02',45075331,default,default);

insert into usuarios values 
(default,"PelusaX@gmail.com","Mandela","Buendia","https://static.nationalgeographic.es/files/styles/image_3200/public/nelson-mandela-09060209807.jpg?w=400&h=400&q=75",'2001-02-02',45075330,default,default);

insert into usuarios values 
(default,"LupoElGrande@gmail.com","Trump","BuenasNoches","https://cnnespanol.cnn.com/wp-content/uploads/2023/04/Trump-maquinas-votacion.jpg",'2000-02-02',45075339,default,default);

insert into usuarios values 
(default,"TioGrandpa4500@gmail.com","Kennedy","BuenasTardes","https://historia.nationalgeographic.com.es/medio/2019/05/28/john-f-kennedy_79f14e9c_748x970.jpg",'2001-02-02',45075338,default,default);

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

insert into comentarios values (default, 3, 5, "Gran producto me ayudó mucho", default, default);
insert into comentarios values (default, 4, 2, "Recomendado para la casa", default, default);
insert into comentarios values (default, 8, 4, "Malisimo, me revento el microondas", default, default);
insert into comentarios values (default, 2, 1, "Producto mediocre, gaste 3 masterballs y no funcionaron", default, default);
insert into comentarios values (default, 7, 5, "Excelente compania en el ambito laboral", default, default);
insert into comentarios values (default, 10, 1, "No recomendable, deja pelos por todas partes", default, default);
insert into comentarios values (default, 6, 2, "Me hace las cuentas y paga los impuestos", default, default);
insert into comentarios values (default, 5, 4, "Excelente producto! A la primera masterball lo atrape", default, default);
insert into comentarios values (default, 9, 3, "Abstenerse curiosos, consumen demasiada comida", default, default);
insert into comentarios values (default, 1, 5, "Muy bueno para los jovenes", default, default);
insert into comentarios values (default, 4, 1, "pReSio?", default, default);
insert into comentarios values (default, 2, 4, "Buenas?", default, default);
insert into comentarios values (default, 5, 2, "Stock?", default, default);
insert into comentarios values (default, 6, 3, "Buen dia", default, default);
insert into comentarios values (default, 7, 1, "QUe onda?", default, default);
insert into comentarios values (default, 1, 4, "Ratio", default, default);
insert into comentarios values (default, 8, 2, "Quedan?", default, default);
insert into comentarios values (default, 10, 5, "Volumen?", default, default);
insert into comentarios values (default, 3, 3, "Area?", default, default);
insert into comentarios values (default, 9, 1, "Permutas?", default, default);
insert into comentarios values (default, 1, 5, "Mercadopago?", default, default);
insert into comentarios values (default, 8, 1, "Transferencia?", default, default);
insert into comentarios values (default, 2, 3, "Aceptas oro?", default, default);
insert into comentarios values (default, 6, 2, "pReSio?", default, default);
insert into comentarios values (default, 4, 4, "Contestas dm?", default, default);
insert into comentarios values (default, 7, 5, "Llega a uru?", default, default);
insert into comentarios values (default, 5, 3, "LLega a Bolivia?", default, default);
insert into comentarios values (default, 3, 1, "Llega a peru?", default, default);
insert into comentarios values (default, 10, 4, "LLega a mexico?", default, default);
insert into comentarios values (default, 9, 2, "Llega a paraguay?", default, default);
insert into comentarios values (default, 5, 5, "Se puede?", default, default);
insert into comentarios values (default, 6, 3, "Sigue estando?", default, default);
insert into comentarios values (default, 10, 2, "Sigue?", default, default);
insert into comentarios values (default, 3, 1, "Toleran calor?", default, default);
insert into comentarios values (default, 9, 4, "Toleran viento?", default, default);
insert into comentarios values (default, 8, 2, "Toleran frio?", default, default);
insert into comentarios values (default, 7, 5, "Que comen?", default, default);
insert into comentarios values (default, 1, 3, "Que no comen?", default, default);
insert into comentarios values (default, 2, 4, "Comen?", default, default);
insert into comentarios values (default, 4, 1, "Gracias", default, default);