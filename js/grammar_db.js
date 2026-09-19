// js/grammar_db.js

let grammarDB = {
    "present-simple": `
    <section class="grammar-doc">
        <h1>Present Simple</h1>

        <h3>Usos</h3>
        <p>Se usa <b>Present Simple</b> para acciones que se llevan a cabo de manera habitual o repetida:</p>
        <ul>
            <li>She often <b>goes</b> to the park. <br><i>(Ella va al parque seguido)</i></li>
            <li>We <b>have</b> breakfast at 7:30 every morning. <br><i>(Nosotros desayunamos a las 7:30 cada mañana)</i></li>
        </ul>
        <p>También se usa cuando algo es siempre o normalmente verdadero:</p>
        <ul>
            <li>Apples <b>grow</b> on trees. <br><i>(Las manzanas crecen en los árboles)</i></li>
            <li>He <b>lives</b> in Italy. <br><i>(Él vive en Italia)</i></li>
            <li>I <b>am</b> Paul. <br><i>(Yo soy Paul)</i></li>
        </ul>
        <br>

        <h3>Fórmula</h3>
        <p>En el <b>Present Simple</b> el verbo es el mismo que en su forma base.</p> 
        <p>Si el verbo es <b>be</b>, se usan sus conjugaciones para cada sujeto:</p>
        <ul>
            <li>I <b>am</b> Mexican. <br><i>(Yo soy mexicano)</i></li>
            <li>He <b>is</b> Mexican. <br><i>(Él es mexicano)</i></li>
            <li>They <b>are</b> Mexicans. <br><i>(Ellos son mexicanos)</i></li>
        </ul>

        <p>Para todos los demás verbos, cuando el sujeto es <b>He, She, It</b> al verbo se le agrega una <b>s, es, ies</b> al final dependiendo de la terminación, en general es solo <b>s</b>:</p>
        <ul>
            <li>I <b>play</b> tennis on Fridays. <br><i>(Yo juego tennis los viernes)</i> </li>
            <li>She <b>plays</b> tennis on Fridays. <br><i>(Ella juega tennis los viernes)</i></li>
            <li>My parents <b>work</b> in London. <br><i>(Mis padres trabajan en Londres)</i></li>
            <li>My brother <b>works</b> in London. <br><i>(Mi hermano trabaja en Londres)</i></li>
        </ul>
        <p>Si un verbo termina en <b>o, sh, ch, ss, x</b> se agrega <b>es</b> al final (en lugar de solo <b>s</b>):</p>
        <ul>
            <li>He <b>washes</b>... <br><i>(Él lava)</i></li>
            <li>She <b>goes</b>... <br><i>(Ella va)</i></li>
            <li>She <b>catches</b>... <br><i>(Ella atrapa)</i></li>
            <li>He <b>misses</b>... <br><i>(Él extraña)</i></li>
            <li>She <b>fixes</b>... <br><i>(Ella repara)</i></li>
        </ul>
        <p>Si un verbo termina con <b>consonante + y</b>, se quita la "y" y se coloca <b>ies</b> al final:</p>
        <ul>
            <li>She <b>studies</b>... <br><i>(Ella estudia)</i></li>
            <li>He <b>carries</b>... <br><i>(Él carga)</i></li>
        </ul>
        <br>

        <h3>Negativos</h3>
        <p>En <b>Present Simple</b> para formar una oración negativa cuando el verbo es <b>be</b> se agrega <b>not</b> a la conjugación:</p>
        <ul>
            <li>I<b>'m not</b> John. <br><i>(Yo no soy John)</i></li>
            <li>She <b>isn't</b> happy. <br><i>(Ella no está feliz)</i></li>
            <li>We <b>aren't</b> the teachers. <br><i>(Nosotros no somos los maestros)</i></li>
        </ul> 
            
        <p>Para los demás verbos se utiliza <b>don't (do not)/doesn't (does not) + verbo</b> en su forma base (sin importar el sujeto)</p>
        <p>Con <b>He, She, It</b> se usa <b>doesn't</b>:</p>
        <ul>
            <li>They <b>don't like</b> fish. <br><i>(A ellos no les gusta el pescado)</i></li>
            <li>She <b>doesn't like</b> fish. <br><i>(A ella no le gusta el pescado)</i></li>
            <li>Students <b>don't wear</b> uniforms. <br><i>(Los estudiantes no usan uniformes)</i></li>
            <li>John <b>doesn't wear</b> a uniform. <br><i>(John no usa uniforme)</i></li>
        </ul>
        <br>

        <h3>Preguntas</h3>
        <p>Las preguntas del <b>Present Simple</b> cuando el verbo es <b>be</b> usan la siguiente fórmula <b>be + sujeto</b>:</p>
        <ul>
            <li><b>Am I</b> in the list? <br><i>(¿Estoy yo en la lista?)</i><br><span>Yes, you <b>are</b>/ No, you <b>aren't</b>.</span></li>
            <li><b>Is he</b> Paul? <br><i>(¿Es él Paul?)</i><br><span>Yes, he <b>is</b>/ No, he <b>isn't</b>.</span></li>
            <li><b>Are they</b> students? <br><i>(¿Son ellos estudiantes?)</i><br><span>Yes, they <b>are</b>/ No, they <b>aren't</b>.</span></li>
        </ul>
        <p>Para los demás verbos y sus respuestas simples se forman utilizando <b>do/does + sujeto + verbo</b> en su forma base (sin importar el sujeto)</p>
        <p>Con <b>He, She, It</b> se usa <b>does</b>:</p>
        <ul>
            <li><b>Do you like</b> cats? <br><i>(¿A ti te gustan los gatos?)</i><br><span>Yes, I <b>do</b>/ No, I <b>don't</b>.</span></li>
            <li><b>Does she live</b> here? <br><i>(¿Ella vive aquí?)</i><br><span>Yes, she <b>does</b>/ No, she <b>doesn't</b>.</span></li>
            <li><b>Do they have</b> books? <br><i>(¿Ellos tienen libros?)</i><br><span>Yes, they <b>do</b>/ No, they <b>don't</b>.</span></li>
        </ul>
        <br>

        <h3>Notas:</h3>
        <p>1. Cuando se usa un verbo auxiliar como <b>Does</b> o <b>Doesn't</b>, el verbo principal se queda en su forma base aunque el sujeto sea <b>He, She, It</b>. Por eso la pregunta <em>"Does she live here?"</em> es con <em>"live"</em> y no con <em>"lives"</em>.</p>
        <p>2. El sujeto <b>I</b> (yo) siempre se escribe en mayúsculas.</p>
        <br>

        <h3>Extra</h3>
        <p>Cuando un verbo tiene el significado de agrado o desagrado, normalmente el verbo que lo acompaña lleva terminación <b>ing</b>:</p>
        <ul>
            <li>We <b>love going</b> to the cinema. <br><i>(Nosotros amamos ir al cine)</i></li>
            <li>She <b>hates playing</b> videogames. <br><i>(Ella odia jugar videojuegos)</i></li>
            <li>I <b>enjoy travelling</b>. <br><i>(Yo disfruto viajar)</i></li>
            <li>They don't <b>like doing</b> homework. <br><i>(A ellos no les gusta hacer tarea)</i></li>
        </ul>
    </section>
  `,

    "present-continuous": `
    <section class="grammar-doc">
        <h1>Present Continuous (presente)</h1>

        <h3>Usos</h3>
        <p>Se utiliza <b>Present Continuous</b> para acciones que están pasando en este momento:</p>
        <ul>
            <li>My brother <b>is watching</b> TV. <br><i>(Mi hermano está viendo TV)</i></li>
            <li>It<b>'s raining</b> now. <br><i>(Está lloviendo ahora)</i></li>
        </ul>
        <br>

        <h3>Fórmula</h3>
        <p>El <b>Present Continuous</b> se forma con <b>be + verb-ing</b>:</p>
        <ul>
            <li>I<b>'m reading</b> a book. <br><i>(Yo estoy leyendo un libro)</i></li>
            <li>Paul <b>is listening</b> to the radio. <br><i>(Paul está escuchando el radio)</i></li>
            <li>They<b>'re playing</b> football. <br><i>(Ellos están jugando fútbol)</i></li>
        </ul>
        <br>

        <h3>Negativos</h3>
        <p>Para formar una oración negativa con <b>Present Continuous</b> se usa <b>be + not + verb-ing</b>:</p>
        <ul>
            <li>I<b>'m not reading</b> a book. <br><i>(Yo no estoy leyendo un libro)</i></li>
            <li>Paul <b>isn't listening</b> to the radio. <br><i>(Paul no está escuchando el radio)</i></li>
            <li>They <b>aren't playing</b> football. <br><i>(Ellos están jugando fútbol)</i></li>
        </ul>
        <br>

        <h3>Preguntas</h3>
        <p>Las preguntas se forman con <b>be + sujeto + verbo-ing</b> y en sus respuestas simples se usa <b>be</b>:</p>
        <ul>
            <li><b>Is he reading</b> the newspaper? <br><i>(¿Él está leyendo el periódico?)</i><br><span>Yes, he <b>is</b>/ No, he <b>isn't</b>.</span></li>
            <li><b>Are you studying</b> for the exam? <br><i>(¿Estás estudiando para el examen?)</i><br><span>Yes, I <b>am</b>/ No, I <b>am not</b>.</span></li>
            <li>Why <b>is she running?</b> <br><i>(¿Por qué ella está corriendo?)</i></li>
            <li>What <b>are you doing?</b> <br><i>(¿Qué estás haciendo?)</i></li>
        </ul>
    </section>
  `,

    "past-simple": `
      <section class="grammar-doc">
        <h1>Past Simple</h1>

        <h3>Usos</h3>
        <p>El <b>Past Simple</b> se utiliza para hablar de acciones o eventos que se llevaron a cabo en el pasado, es decir, que ya terminaron.</p>
        <br>

        <h3>Fórmula</h3>
        <p>La formula de <b>Past Simple</b> es usando el verbo principal en pasado simple.
        <ul>
            <li>I <b>was</b> here yesterday. <br><i>(Yo estuve aquí ayer)</i></li>
            <li>They <b>were</b> good students. <br><i>(Ellos fueron buenos estudiantes)</i></li>
            <li>They <b>ate</b> pizza. <br><i>(Ellos comieron pizza)</i></li>
            <li>She <b>went</b> to the hotel. <br><i>(Ella fue al hotel)</i></li>
            <li>You <b>lived</b> in France. <br><i>(Tú viviste en Francia)</i></li>
        </ul>
        <br>

        <h3>Negativos</h3>
        <p>Para formar negativos en <b>Past Simple</b> hay dos formas. Si el verbo es <b>be</b> se utiliza <b>wasn't (was not)/ weren't (were not)</b>:</p>
        <p>Con <b>He, She, It</b> se usa <b>wasn't</b>:</p>
        <ul>
            <li>We <b>weren't</b> ready. <br><i>(No estuvimos listos)</i></li>
            <li>She <b>wasn't</b> at home <br><i>(Ella no estuvo en casa)</i></li>
            <li>You <b>weren't</b> here. <br><i>(No estuviste aquí)</i></li>
        </ul>
        <p>Para los demás verbos se usa el auxiliar <b>didn't (did not) + verbo</b> en su forma base (sin importar el sujeto):</p>
        <ul>
            <li>I <b>didn't like</b> the movie. <br><i>(No me gustó la película)</i></li>
            <li>John <b>didn't do</b> the homework. <br><i>(John no hizo la tarea)</i></li>
            <li>It <b>didn't work</b>. <br><i>(Eso no funcionó)</i></li>
        </ul>
        <br>

        <h3>Preguntas</h3>
        <p>Para crear preguntas con <b>Past Simple</b> también hay dos formas. Si el verbo es <b>be</b> se utiliza <b>was/were + sujeto</b>.</p>
        <p>Con <b>He, She, It</b> se usa <b>was</b>:</p>
        <ul>
            <li><b>Were you</b> at school? <br><i>(¿Estuviste en la escuela?)</i><br><span>Yes, I <b>was</b>/ No, I <b>was't</b>.</span></li>
            <li><b>Was it </b> delicious? <br><i>(¿Estuvo delicioso?)</i><br><span>Yes, it <b>was</b>/ No, it <b>wasn't</b>.</span></li>
            <li><b>Wasn't he</b> in the hospital? <br><i>(¿No estuvo él en el hospital?)</i><br><span>Yes, he <b>was</b>/ No, he <b>wasn't</b>.</span></li> 
        </ul>
        <p>Para los demás verbos se usa <b>did/didn't + sujeto + verbo</b> en su forma base:</p>
        <ul>
            <li><b>Did you eat</b> the cake? <br><i>(¿Te comiste el pastel?)</i><br><span>Yes, I <b>did</b>/ No, I <b>didn't</b>.</span></li>
            <li><b>Did she run</b> fast? <br><i>(¿Ella corrió rápido?)</i><br><span>Yes, she <b>did</b>/ No, she <b>didn't</b>.</span></li>
            <li><b>Didn't he go</b> to sleep? <br><i>(¿No se fue él a dormir?)</i><br><span>Yes, he <b>did</b>/ No, he <b>didn't</b>.</span></li>
            <li><b>Did Paul sing</b> at the party? <br><i>(¿Paul cantó en la fiesta?)</i><br><span>Yes, he <b>did</b>/ No, he <b>didn't</b>.</span></li>
        </ul>
        <br>
    </section>
  `
};
