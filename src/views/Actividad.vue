<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificando los saberes de masa madre y producción artesanal de pan.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar y reforzar su capacidad para identificar los conceptos clave sobre materias primas, porcentaje panadero, fermentación, obtención y mantenimiento de masa madre, así como las etapas de producción de pan de masa madre (amasado, fermentaciones, moldeado, greñado, horneado y conservación).',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La harina de fuerza, con un contenido proteico entre 11 % y 13 %, es la más adecuada para la elaboración de panes artesanales de masa madre porque:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aporta un sabor más dulce al pan final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporciona el gluten necesario para una buena estructura y retención de gases.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reduce el tiempo de fermentación de la masa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es más económica que otros tipos de harina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Ese rango de proteína proporciona el gluten necesario para una buena estructura y retención de gases.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El agua utilizada en la masa madre debe estar libre de cloro porque:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cloro altera el color de la masa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cloro hace que la masa se vuelva pegajosa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El cloro inhibe las levaduras silvestres y bacterias lácticas necesarias para la fermentación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El cloro acelera el proceso de fermentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Incorrecto. El cloro inhibe las levaduras; se recomienda usar agua sin cloro o dejar reposar el agua del grifo 24 horas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En el sistema de porcentaje panadero, la harina se considera siempre el 100% y los demás ingredientes se expresan como porcentajes de esa harina. ¿Cuál es la principal ventaja de este sistema?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilita el escalado de recetas y la comparación entre masas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reduce el tiempo de amasado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumenta la vida útil del pan.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permite calcular el costo exacto de cada ingrediente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Ese sistema facilita el escalado de recetas y la comparación entre masas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'En la masa madre, ¿qué microorganismo es el responsable de la fermentación alcohólica que produce el dióxido de carbono para leudar la masa?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bacterias lácticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Levaduras silvestres.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mohos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acetobacterias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La fermentación alcohólica es realizada por las levaduras silvestres (principalmente <em>Saccharomyces cerevisiae</em> y otras especies), mientras que las bacterias lácticas producen ácidos orgánicos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La masa madre líquida (100 % de hidratación) fermenta más rápido y produce un sabor más suave, predominando el ácido láctico. Esto se debe a que:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tipo de harina no influye en el resultado final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La menor hidratación produce más ácido acético.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La temperatura ambiente no afecta la fermentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La mayor hidratación acelera la fermentación y favorece el ácido láctico, de sabor suave.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. La mayor hidratación acelera la fermentación y favorece el ácido láctico, de sabor suave.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Para obtener masa madre desde cero se requiere un proceso de alimentación diaria durante 5 a 7 días, con relación de refresco 1:2:2 (masa madre : harina : agua). ¿Cuál es el propósito de este procedimiento?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Lograr una masa madre activa y estable con una comunidad microbiana equilibrada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Obtener una masa madre líquida en menos de 24 horas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar por completo las bacterias lácticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el contenido de gluten de la harina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Ese es el procedimiento estándar para lograr una masa madre activa y estable, con una comunidad microbiana equilibrada de levaduras y bacterias lácticas.',
          mensaje_incorrecto:
            'Exacto. Ese es el procedimiento estándar para lograr una masa madre activa y estable.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el momento adecuado para añadir la sal en la elaboración de pan de masa madre?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al inicio, junto con la harina y el agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Después de la autolisis, junto con la masa madre.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Al final del amasado, justo antes de la fermentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nunca se debe añadir sal a la masa madre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La sal se añade después de la autolisis, junto con la masa madre, porque la sal puede inhibir la actividad de las levaduras si se añade al inicio y porque retrasa la hidratación del gluten.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Durante la fermentación primaria, los pliegues (<em>stretch and fold</em>) se realizan cada 30-45 minutos. ¿Cuál es su principal función?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Enfriar la masa para detener la fermentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la red de gluten y redistribuir los microorganismos y la temperatura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Añadir más harina a la masa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dar forma final al pan antes del horneado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Los pliegues se realizan cada 30-45 minutos durante las primeras horas de fermentación para fortalecer la red de gluten, redistribuir los microorganismos y homogeneizar la temperatura de la masa.',
          mensaje_incorrecto:
            'Correcto. Los pliegues se realizan cada 30-45 minutos durante las primeras horas de fermentación.',
        },
        {
          id: 9,
          texto:
            'La prueba de la membrana (<em>windowpane test</em>) consiste en estirar un trozo de masa hasta formar una película fina sin que se rompa. ¿Qué indica una prueba de membrana exitosa?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el pan está listo para ser horneado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que la masa madre está activa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el amasado ha sido suficiente y el gluten está bien desarrollado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que la fermentación ha terminado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Es la forma de verificar que el amasado ha sido suficiente y que la red de gluten está bien desarrollada, lo que permitirá una buena retención de gases durante la fermentación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El greñado (<em>scoring</em>) en el pan de masa madre se realiza:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Después del horneado, para decorar el pan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Durante la fermentación primaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Al final de la fermentación secundaria, antes de refrigerar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Justo antes de hornear, para controlar la expansión y crear la "oreja".',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. El greñado se hace justo antes de hornear, con un cuchillo de greñar (<em>lame</em>), para controlar la expansión del pan en el horno y crear la característica "oreja" que permite una mejor apertura de la miga.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Para obtener un pan de masa madre con buena corteza y adecuada expansión, la temperatura del horno y el uso de vapor deben ser:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Temperatura constante durante toda la cocción, sin necesidad de vapor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Temperatura alta inicial (230-250 °C) con vapor en los primeros minutos, luego se reduce ligeramente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Temperatura baja (180 °C) durante toda la cocción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere control de temperatura, solo tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El pan de masa madre requiere una temperatura alta inicial (230-250 °C) con vapor en los primeros minutos para permitir la expansión y crear una corteza crujiente, y luego se puede reducir ligeramente para terminar la cocción.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La masa madre refrigerada a 2-5 °C puede conservarse por varios días. ¿Cómo se reactiva antes de usarla?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se usa directamente del refrigerador sin necesidad de reactivación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se calienta en el microondas por 30 segundos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se deja a temperatura ambiente y se alimenta con uno o dos refrescos hasta que recupere actividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se añade más sal para activar las levaduras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La refrigeración ralentiza la fermentación, y la reactivación requiere sacar la masa madre del refrigerador, dejarla a temperatura ambiente y alimentarla con uno o dos refrescos (harina y agua) para que recupere su actividad fermentativa.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Un pan de masa madre con alta hidratación (70-80 %) produce una miga:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Más abierta, alveolar e irregular, como en la ciabatta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Más seca y quebradiza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Más cerrada y uniforme.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sin diferencias significativas con una hidratación baja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La alta hidratación genera una miga más abierta, alveolar e irregular, característica de panes como la ciabatta o los panes rústicos de masa madre muy hidratados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'La autolisis consiste en mezclar harina y agua y dejar reposar 30 minutos antes de añadir la masa madre y la sal. ¿Cuál es el propósito de esta técnica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activar las levaduras presentes en la harina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el exceso de humedad de la harina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permitir la hidratación completa de la harina y el inicio del desarrollo del gluten sin amasado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Añadir sabor a la masa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La autolisis (solo harina y agua, sin sal ni masa madre) permite que la harina se hidrate completamente y que el gluten comience a desarrollarse sin necesidad de amasado, lo que reduce el tiempo de amasado y mejora la textura final.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'El <em>poolish</em> es un prefermento líquido con 100% de hidratación que se utiliza comúnmente en baguettes y pizzas. ¿Cuál es su principal característica?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un prefermento de larga fermentación que aporta sabor y textura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se utiliza exclusivamente para panes dulces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No requiere levadura para su elaboración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se fermenta a temperatura de refrigeración durante 48 horas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Aunque no es el prefermento típico de la masa madre pura (que usa solo levaduras silvestres y bacterias lácticas), el <em>poolish</em> es un ejemplo de prefermento muy usado en panadería artesanal que aporta sabor y textura a los panes.',
          mensaje_incorrecto:
            'Correcto. Aunque no es el prefermento típico de la masa madre pura, es un ejemplo de prefermento muy usado.',
        },
        {
          id: 16,
          texto:
            'La temperatura ideal de la masa al final del amasado debe ser de:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '18-20 °C para una fermentación lenta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '24-26 °C; temperaturas superiores aceleran excesivamente la fermentación y pueden dañar el gluten.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '30-35 °C para favorecer la fermentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '40-45 °C para activar las levaduras rápidamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La temperatura ideal es 24-26 °C; temperaturas superiores aceleran excesivamente la fermentación y pueden dañar el gluten.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El "<em>hooch</em>" es una capa de líquido oscuro que aparece en la masa madre refrigerada. ¿Qué significa su aparición?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la masa madre está lista para usar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que la masa madre se ha contaminado con bacterias dañinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que la masa madre tiene hambre (falta de alimento) y necesita ser alimentada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que la masa madre debe ser desechada inmediatamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El <em>hooch</em> es una señal de que la masa madre tiene hambre y necesita ser alimentada. Se puede revolver o decantar antes de alimentar la masa madre.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Por qué es importante enfriar completamente el pan de masa madre sobre una rejilla antes de cortarlo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No es necesario enfriarlo; se puede cortar caliente sin problemas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para que el pan sea más fácil de cortar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para que la corteza se ablande.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque cortarlo caliente libera el vapor residual y reseca la miga.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. Cortarlo caliente libera el vapor residual y reseca la miga, afectando la textura y el sabor del pan. Se recomienda esperar al menos 2 horas antes de cortarlo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la forma más recomendada para conservar el pan de masa madre y mantener su calidad?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Refrigeración (2-5 °C), porque mantiene la corteza crujiente por más tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En una bolsa de plástico hermética a temperatura ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En el microondas con un vaso de agua para mantener la humedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Temperatura ambiente (envuelto en un paño de algodón o bolsa de papel) o congelación para larga duración.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. La refrigeración acelera la retrogradación del almidón y endurece el pan; es mejor conservarlo a temperatura ambiente envuelto en un paño de algodón o bolsa de papel, o congelarlo para larga duración.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La temperatura interna del pan al final del horneado debe alcanzar al menos 94 °C para:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la corteza se vuelva blanda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asegurar la gelatinización completa del almidón y la eliminación de patógenos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Detener la fermentación de la masa madre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el pan adquiera un color dorado uniforme.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. A esa temperatura se garantiza la gelatinización del almidón y la eliminación de patógenos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
