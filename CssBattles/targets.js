export default [
    {
        number: 1,
        name: 'Simply Square',
        html: `
            <div></div>`,
        css: `
            body {
                background: #5d3a3a;
                margin: 0;
            }
            div {
                width: 200px;
                height: 200px;
                background: #b5e0ba;
            }`
    },
    {
        number: 2,
        name: 'Carrom',
        html: `
            <div class="p">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`,
        css: `
            body {
                background: #62374e
            }
            .p {
                display: flex;
                flex-wrap: wrap;
                gap: 100px;
                margin: 50px 42px;
                justify-content: space-between;
            }
            div > div {
                width: 50px;
                height: 50px;
                background: #fdc57b;
            }`
    },
    {
        number: 3,
        name: 'Push Button',
        html: `
            <div class="a"></div>
            <div class="z"></div>`,
        css: `
            body {
                background: #6592CF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .a {
                background: #243D83;
                width: 300px;
                height: 150px
            }
            .z {
                aspect-ratio: 1;
                position: absolute;
                border-radius: 100%;
                background: #EEB850;
                width: 50px;
                border: 50px solid #243D83;
                box-shadow: 0 0 0 50px #6592CF;
            }`
    },
    {
        number: 4,
        name: 'Ups n Downs',
        html: `
            <div></div>
            <div></div>
            <div></div>`,
        css: `
            body {
                background: #62306D;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            div {
                background: #F7EC7D;
                width: 100px;
                height: 100px;
                border-radius: 0% 0% 50% 50%;
                transform: translateY(50px);
            }
            div:nth-child(2) {
                transform: rotateX(180deg) translateY(50px);
            }`
    },
    {
        number: 5,
        name: 'Acid Rain',
        html: `
            <div class="c">
                <div class="c">
                    <div class="s"></div>
                    <div class="c">
                        <div class="s"></div>
                    </div>
                </div>
            </div>`,
        css: `
            body {
                background: #0B2429;
            }
            div {
                position: absolute;
                aspect-ratio: 1;
            }
            .c {
                background: #F3AC3C;
                width: 120px;
                border-radius: 100%;
                top: 30px;
                right: 80px
            }
            .c .c:nth-child(1) {
                background: #998235;
            }
            .c .c {
                top: 60px;
                left: -60px;
            }
            .s {
                width: 50px;
                background: inherit;
                right: 0;
            }`
    },
    {
        number: 6,
        name: 'Missing Slice',
        html: `
            <div class="w">
                <div class="a"></div>
                <div class="b"></div>
                <div class="c"></div>
                <div class="d"></div>
            </div>`,
        css: `
        body {
            background: #E3516E;
        }
        .w {
            background: transparent;
            display: flex;
            flex-wrap: wrap;
            width: 200px;
            height: 200px;
            inset: 0;
            position: absolute;
            margin: auto;
        }
        div {
            width: 100px;
            height: 100px;
        }
        .a {
            background: #51B5A9;
            border-radius: 100px 0% 0% 0%;
        }
        .b {
            background: #FADE8B;
            border-radius: 0% 100% 0% 0%;
        }
        .c {
            background: #F7F3D7;
            border-radius: 0% 0% 0% 100%;
        }
        .d {
            background: #E3516E;
        }`
    },
    {
        number: 7,
        name: 'Leafy Trail',
        html: `
            <div class="l a"></div>
            <div class="l b"></div>
            <div class="l c"></div>`,
        css: `
            body {
                background: #0B2429;
                position: absolute;
                inset: 0;
                margin: auto;
                width: 150px;
                height: 150px;
            }
            .l {
                width: 150px;
                height: 150px;
                border-radius: 67% 0%;
                position: absolute;
                top: 0;
            }
            .a {
                background: #1A4341;
                left: -50px;
            }
            .b {
                background: #998235;
            }
            .c {
                background: #F3AC3C;
                left: 50px;
            }`
    },
    {
        number: 8,
        name: 'Forking Crazy',
        html: `
            <div class="b">
                <div class="t"></div>
                <div class="p"></div>
                <div class="t"></div>
                <div class="p"></div>
                <div class="t"></div>
                <div class="p"></div>
                <div class="t"></div>
            </div>
            <div class="h"></div>`,
        css: `
            body {
                background: #6592CF;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 60px;
            }
            div {
                background: #060F55;
                
                position: relative;
            }
            .b {
                display: flex;
                height: 190px;
                border-radius: 0% 0% 150px 150px;
            }
            .h {
                width: 20px;
                height: 90px;
                top: -10px;
            }
            .p {
                background: #6592CF;
                width: 20px;
                height: 100px;
                border-radius: 0% 0% 20px 20px;
            }
            .t {
                border-radius: 100%;
                width: 20px;
                height: 20px;
                top: -10px;
            }`
    },
    {
        number: 9,
        name: 'Tesseract',
        html: `
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>
            <div class="d"></div>`,
        css: `
            body, .b {
                background: #222730;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .a, .c {
                width: 100%;
                height: 150px;
                background: #4CAAB3;
            }
            .b, .c {
                width: 250px;
                height: 250px;
                transform: rotate(45deg);
            }
            .c {
                width: 150px;
                height: 150px;
            }
            .d {
                background: #393E46;
                width: 50px;
                height: 50px;
                border-radius: 100%
            }`
    },
    {
        number: 10,
        name: 'Cloaked Spirits',
        html: `
            <div></div>
            <div></div>
            <div></div>`,
        css: `
            body {
                background: #62306D;
                margin: 0 50px;
                display: flex;
                align-items: end;
            }
            div {
                width: 100px;
                height: 150px;
                background: #F7EC7D;
                border-radius: 100px 100px 0  0;
            }
            div:nth-child(2) {
                height: 250px;
            }
            div:after {
                content: '';
                display: block;
                background: #E38F66;
                height: 100px;
                border-radius: 100px;
                border: 20px solid #AA445F;
                box-sizing: border-box;
            }
            div:nth-child(2):after {
                background: #AA445F;
                border: 20px solid #E38F66;
            }`
    },
    {
        number: 11,
        name: 'Eye of Sauron',
        html: `
            <div class="a c"></div>
            <div class="b c"></div>
            <div class="d"></div>
            <div class="e"></div>`,
        css: `
            body {
                background: #191210;
            }
            div {
                margin: auto;
                inset: 0;
                position: absolute;
            }
            .c {
                border-radius: 100%;
            }
            .a {
                width: 140px;
                height: 140px;
                box-sizing: border-box;
                border: 20px solid #ECA03D;
            }
            .b {
                width: 50px;
                height: 50px;
                background: #84271C;
            }
            .d, .e {
                background: #191210;
                width: 100px;
                height: 50px;
                position: relative;
                left: 100px;
                top: 92px;
                border-radius: 100px 100px 0 0;
                border: 20px solid #ECA03D;
                border-bottom: none;
                box-sizing: border-box;
            }
            .e {
                left: -100px;
                transform: rotate(180deg);
            }`
    },
    {
        number: 12,
        name: 'Wiggly Moustache',
        html: `
            <div class="a"></div>
            <div class="b r"><div class="d"></div></div>
            <div class="c r"><div class="e"></div></div>`,
        css: `
            body {
                background: #F5D6B4;
            }
            .a, .b, .c {
                width: 100px;
                height: 50px;
                border-radius: 50px 50px 0 0;
                border: 20px solid #D86F45;
                border-bottom: 0;
                box-sizing: border-box;
                position: absolute;
                margin: auto;
                inset: 0;
                top: -50px;
            }
            .r {
                transform: rotate(180deg);
                top: 50px;
            }
            .b {
                left: -160px;
            }
            .c {
                left: 160px;
            }
            .d, .e {
                height: 20px;
                width: 20px;
                background: #D86F45;
                position: relative;
                left: -20px;
                top: 20px;
                border-radius: 100%;
            }
            .d {
                left: 60px;
            }`
    },
    {
        number: 13,
        name: 'Totally Triangle',
        html: `
            <div></div>`,
        css: `
            body {
                background: #0B2429;
                margin: 0;
            }
            div {
                width: 0;
                border-style: solid;
                border-width: 140px 140px 0 0;
                border-color: #F3AC3C transparent;
            }`
    },
    {
        number: 14,
        name: 'Web Maker Logo',
        html: `
            <div class="t"></div>
            <div class="t a"></div>
            <div class="t b"></div>
            <div class="t c"></div>`,
        css: `
            body {
                background: #F2F2B6;
            }
            .t {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 75px 130px 75px;
                border-color: transparent transparent #FF6D00;
                position: absolute;
                inset: 0;
                margin: auto;
                left: 130px;
            }
            .a {
                border-color: transparent transparent #FD4602;
                left: 90px;
            }
            .b, .c {
                border-width: 130px 75px 0 75px;
                border-color: #FD4602 transparent;
                left: -90px;
            }
            .c {
                border-color: #FF6D00 transparent;
                left: -130px;
            }`
    },
    {
        number: 15,
        name: 'Overlap',
        html: `
            <div class="left"></div>
            <div class="right">
                <div></div>
            </div>`,
        css: `
            body {
                background: #09042A;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
                width: 150px;
                height: 150px;
                border-radius: 100px;
            }
            .left {
                background: #7B3F61;
                left: -100px;
            }
            .right {
                left: 100px;
                background: #E78481;
                overflow: hidden;
            }
            .right > div {
                background: #09042A;
                left: -200px
            }`
    },
    {
        number: 16,
        name: 'Eye of the Tiger',
        html: `
            <div class="z"></div>
            <div class="z r"></div>
            <div class="c b"></div>
            <div class="c a"></div>`,
        css: `
            body, div {
                background: #0B2429;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .c {
                border-radius: 100%;
            }
            .a {
                width: 140px;
                height: 140px;
                border: 45px solid #F3AC3C;
                box-sizing: border-box;
            }
            .b {
                width: 180px;
                height: 180px;
                border: 10px solid #998235;
            }
            .z {
                width: 10px;
                height: 0px;
                border-style: solid;
                border-width: 100px 90px 0 0;
                border-color: #998235 transparent;
                transform: rotate(-45deg);
                left: -142px;
            }
            .r {
                transform: rotate(135deg);
                left: 141px;
            }`
    },
    {
        number: 17,
        name: 'Fidget Spinner',
        html: `
            <div class="s"></div>
            <div class="z a"></div>
            <div class="z b"></div>
            <div class="z c"></div>
            <div class="z d"></div>`,
        css: `
            body {
                background: #09042A;
            }  
            div {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .s {
                width: 100px;
                height: 50px;
                background: #E78481;
            }
            .z {
                border-radius: 100%;
                width: 80px;
                height: 80px;
                box-sizing: border-box;
            }
            .a, .b {
                background: #09042A;
                left: -120px;
                border: 10px solid #E78481;
                
            }
            .b {
                left: 120px;
            }
            .c, .d {
                background: #F5BB9C;
                top: -106px;
                border: 10px solid #09042A;
            }
            .d {
                top: 106px;
            }`
    },
    {
        number: 18,
        name: 'Matrix',
        html: `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>`,
        css: `
            body {
                background: #5C434C;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                margin: 10px;
            }
            div {
                width: 80px;
                background: #F09462;
                border-radius: 80px 0 0 0;
            }
            div:nth-child(even),
            div:nth-child(5),
            div:nth-child(7)
            {
                background: #F5D6B4;
            }
            div:nth-child(6),
            div:nth-child(8) {
                background: #F09462;
            }`
    },
    {
        number: 19,
        name: 'Cube',
        html: `
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>`,
        css: `
            body {
                background: #0B2429;
            }
            div {
                width: 100px;
                height: 100px;
                background: #F3AC3C;
                rotate: 45deg;
                position: absolute;
                inset: 0;
                margin: auto;
                top: 70px
            }
            .b, .c {
                height: 70px;
                width: 70px;
                top: -70px;
            }
            .b {
                background: #998235;
                left: -70px;
                transform: skew(45deg);
                rotate: 90deg;
            }
            .c {
                background: #1A4341;
                left: 70px;
                transform: skew(-45deg);
                rotate: 90deg;
            }`
    },
    {
        number: 20,
        name: 'Ticket',
        html: `
            <i class="a"></i>
            <i class="b"></i>
            <i class="x c"></i>
            <i class="x d"></i>
            <i class="x e"></i>
            <i class="x f"></i>
            <i class="y g"></i>
            <i class="y h"></i>`,
        css: `
            body {
                background: #62306D;
            }
            i {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .a {
                background: #F7EC7D;
                height: 100px;
                width: 200px;
            }
            .b {
                background: #E38F66;
                height: 100px;
                width: 60px;
                left: 140px;
            }
            .x, .y {
                border-radius: 100%;
                aspect-ratio: 1;
                background: #62306D;
            }
            .x {
                width: 40px;
            }
            .y {
                width: 20px;
            }
            .c, .d, .f, .g {
                left: -200px;
                top: -100px;
            }
            .d, .e, .h {
                top: 100px;
            }
            .e, .f {
                left: 200px;
            }
            .g, .h {
                left: 80px;
            }`
    },
    {
        number: 21,
        name: 'Sitepoint Logo',
        html: `
            <div></div>
            <div class="blue"></div>`,
        css: `
            body {
                background: #222;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
                width: 70px;
                height: 50px;
                border: solid #F2994A;
                border-width: 30px 0 0 30px;
                border-radius: 10px 0;
                transform: rotate(-45deg);
                top: -50px;
                left: -25px;
            }
            .blue {
                border-color: #2D9CDB;
                border-width: 0 30px 30px 0;
                top: 45px;
                left: 21px;
            }`
    },
    {
        number: 22,
        name: 'Cloud',
        html: `
            <div class="left"></div>
            <div class="right"></div>
            <div class="pill"></div>`,
        css: `
            body {
                background: #F5D6B4;
            }
            div {
                width: 100px;
                height: 100px;
                background: #D86F45;
                position: absolute;
                margin: auto;
                inset: 0;
                border-radius: 100%;
            }
            .left {
                left: -100px;
                top: 30px;
            }
            .right {
                left: 60px;
                top: -30px;
            }
            .pill {
                border-radius: 100vw;
                height: 50px;
                width: 170px;
                top: 80px;
                left: 30px;
            }`
    },
    {
        number: 23,
        name: 'Boxception',
        html: `
            <div>
                <div>
                <div></div>
                </div>  
            </div>`,
        css: `
            body {
                background: #F3AC3C;
            }
            div {
                position: absolute;
                width: 200px;
                aspect-ratio: 1;
                background: #1A4341;
                margin: auto;
                inset: 0;
            }
            div > div {
                background: #998235;
                width: 100px;
                inset: revert;
                bottom: 0;
            }
            div > div > div {
                background: #F3AC3C;
                width: 50px;
                right: 0;
            }`
    },
    {
        number: 24,
        name: 'Switches',
        html: `
            <div class="pill">
                <div class="circle"></div>
            </div>
            <div class="pill two">
                <div class="circle"></div>
            </div>`,
        css: `
            body {
                background: #62306D;
            }
            div {
                width: 100px;
                position: absolute;
            }
            .pill {
                border-radius: 100vw;
                height: 150px;
                background: #AA445F;
                top: 50px;
                left: 80px;
            }
            .circle {
                border-radius: 100%;
                aspect-ratio: 1;
                background: #F7EC7D;
                bottom: 0;
            }
            .two {
                background: #E38F66;
                transform-origin: 120px 100px;
                transform: rotate(180deg);
            }`
    },
    {
        number: 25,
        name: 'Blossom',
        html: `
            <section>
                <div class="a"></div>
                <div class="b"></div>
                <div class="c"></div>
                <div class="d"></div>
            </section>`,
        css: `
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #998235;
            }
            section {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                height: 200px;
                width: 200px;
            }
            div {
                width: 80px;
                height: 100px;
                background: #1A4341;
                margin: 10px
            }
            .a, .b {
                border-radius: 0 50px;
            }
            .b, .c {
                background: #F3AC3C;
                height: 60px;
            }
            .c, .d {
                border-radius: 50px 0;
            }`
    },
    {
        number: 26,
        name: 'Smiley',
        html: `
            <div></div>
            <div></div>
            <div></div>`,
        css: `
            body {
                background: #6592CF;
                display: flex;
                margin: 40px auto;
                width: 320px;
            }
            div {
                border-radius: 100%;
                height: 40px;
                width: 120px;
                border-radius: 50% 50% 0 0 / 100% 100% 0 0;
                border: 20px solid #060F55;
                border-bottom: none;
            }
            div:nth-child(2) {
                margin-top: 160px;
                margin-inline: -20px;
                transform: rotate(180deg);
            }`
    },
    {
        number: 27,
        name: 'Lock Up',
        html: `
            <div></div>`,
        css: `
            body {
                background: #E38F66;
            }  
            div {
                margin: auto;
                inset: 0;
                position: absolute;
                width: 80px;
                aspect-ratio: 1;
                background: #AA445F;
                border: solid;
                border-radius: 100%;
                border-width: 30px;
                border-color: #AA445F #F7EC7D;
                transform: rotate(-45deg);
                box-shadow: 0 0 0 30px #AA445F;
            }`
    },
    {
        number: 28,
        name: 'Cups & Balls',
        html: `
            <section>
                <div class="dark"></div>
                <div class="pill"></div>
                <div class="pill dark"></div>
                <div></div>
                <div class="pill down"></div>
                <div class="dark"></div>
                <div></div>
                <div class="pill dark down"></div>
            </section>`,
        css: `
            body {
                background: #1A4341;
            }
            section {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                position: absolute;
                inset: 0;
                margin: auto;
                width: 280px;
                height: 150px;
                gap: 10px;
            }
            div {
                width: 50px;
                aspect-ratio: 1;
                background: #dd6b4d;
                background: #F3AC3C;
                border-radius: 100%;
            }
            .pill {
                border-radius: 100vw 100vw 0 0;
            }
            .down {
                border-radius: 0 0 100vw 100vw;
            }
            .dark {
                background: #998235;
            }`
    },
    {
        number: 29,
        name: 'Suffocate',
        html: `
            <div class="star"></div>
            <div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>`,
        css: `
            body {
                background: #F3AC3C;
            }
            .star {
                width: 200px;
                aspect-ratio: 1;
                position: absolute;
                inset: 0;
                margin: auto;
                background: #1A4341;
            }
            .circle {
                background: #F3AC3C;
                width: 200px;
                aspect-ratio: 1;
                border-radius: 100%;
                position: absolute;
                left: 0px;
                top: -50px;
            }
            .circle:nth-child(2) {
                left: 200px;
            }
            .circle:nth-child(3) {
                left: 200px;
                top: 150px;
            }
            .circle:nth-child(4) {
                top: 150px;
            }`
    },
    {
        number: 30,
        name: 'Horizon',
        html: `
            <div></div>`,
        css: `
            body {
                margin: 0;
            }
            div {
                height: 50px;
                background: #F7EC7D;
                box-shadow: 0 0 0 50px #E38F66,
                            0 0 0 150px #AA445F,
                            0 0 0 250px #62306D;
            }`
    },
    {
        number: 31,
        name: 'Equals',
        html: `
            <div></div>`,
        css: `
            body {
                background: #AA445F;
            }  
            div {
                width: 250px;
                height: 200px;
                position: absolute;
                inset: 0;
                margin: auto;
                border: solid;
                border-radius: 100vw;
                border-color: 0 #E38F66 0 #F7EC7D;
                border-width: 0 100px;
                box-sizing: border-box;
            }`
    },
    {
        number: 32,
        name: 'Bandaid',
        html: `
            <div></div>
            <div class="b"></div>`,
        css: `
            div {
                width: 200px;
                height: 50px;
                background: #F3AC3C;
                transform: rotate(45deg);
                position: absolute;
                inset: 0;
                margin: auto;
                mix-blend-mode: screen;
            }
            .b {
                background: #A3A368;
                transform: rotate(-45deg);
            }`
    },
    {
        number: 33,
        name: 'Birdie',
        html: `
            <div class="a"></div>
            <div class="b"></div>`,
        css: `
            body {
                background: #1A4341;
            }
            div {
                width: 75px;
                height: 150px;
                background: #998235;
                position: absolute;
                margin: auto;
                inset: 0;
            }
            .a {
                border-radius: 100vw 0 0 100vw;
                left: -75px;
            }
            .a::after {
                content: '';
                position: absolute;
                background: #0B2429;
                width: 30px;
                aspect-ratio: 1;
                border-radius: 100%;
                left: 30px;
                top: 30px
            }
            .b {
                top: -100px;
                left: 100px;
                border-radius:  0 100% 0 0;
                height: 100px;
                width: 100px;
                background: #F3AC3C;
            }`
    },
    {
        number: 34,
        name: 'Christmas Tree',
        html: `
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>`,
        css: `
            body {
                background: #007065;
            }
            div {
                width: 0;
                height: 0px;
                border: 100px solid;
                border-color: transparent transparent 
                              var(--bg) transparent;
                position: absolute;
                inset: 0;
                margin: auto;
                transform: scaleX(125%);
            }
            .a {
                --bg: #00A79D;
            }
            .b {
                top: -100px;
                --bg: #F5C181;
            }
            .c {
                top: -200px;
                --bg: #FFEECF;
            }`
    },
    {
        number: 35,
        name: 'Ice Cream',
        html: `
            <div class="stick"></div>
            <div class="treat"></div>`,
        css: `
            body {
                background: #293462;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .stick {
                width: 30px;
                height: 100px;
                background: #FE5F55;
                border-radius: 10px;
                top: 100px;
            }
            .stick::after {
                content: '';
                position: absolute;
                height: 60px;
                width: inherit;
                background: #A64942;
            }
            .treat {
                top: -50px;
                width: 100px;
                height: 150px;
                background: #FFF1C1;
                border-radius: 100vw 100vw 160px 160px;
            }`
    },
    {
        number: 36,
        name: 'Interleaved',
        html: `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>`,
        css: `
            body {
                background: #1A4341;
                display: flex;
                justify-content: space-between;
                margin: 0 25px;
            }  
            div {
                width: 50px;
                height: 300px;
                background: #F3AC3C;
                border-radius: 100vw;
                margin-top: 100px;
            }
            div:nth-child(2n) {
                background: #998235;
                margin-top: -100px;
            }`
    },
    {
        number: 37,
        name: 'Tunnel',
        html: `
            <div></div>`,
        css: `
            body {
                background: #6592CF;
            }  
            div {
                width: 250px;
                aspect-ratio: 1;
                background: #243D83;
                position: absolute;
                inset: 0;
                margin: auto;
            }
            div::before,
            div::after {
                content: '';
                position: inherit;
                aspect-ratio: 1;
                inset: 0;
                margin: auto;
            }
            div::before {
                background: #6592CF;
                width: 150px;
                transform: rotate(15deg);
            }
            div::after {
                background: #243D83;
                width: 75px;
                transform: rotate(30deg);
            }`
    },
    {
        number: 38,
        name: 'Not Simply Square',
        html: `
            <div></div>
            <div class="b"></div>
            <div class="c"></div>`,
        css: `
            body {
                margin: 0;
                background: #293462;
            } 
            div {
                width: 200px;
                height: 200px;
                background: #FFF1C1;
            }
            .b, .c {
                height: 100px;
                background: #FE5F55;
                border-right: 50px solid #A64942;
                box-sizing: border-box;
            }
            .c {
                transform-origin: 300px top;
                transform: rotate(90deg);
            }`
    },
    {
        number: 39,
        name: 'Sunset',
        html: `
            <div class="circle one"></div>
            <div class="circle two"></div>`,
        css: `
            body {
                background: #1A4341;
            }
            .circle {
                border-radius: 100%;
                position: absolute;
                inset: 0;
                margin: auto;
                aspect-ratio: 1;
            }
            .one {
                width: 250px;
                background: linear-gradient(
                transparent,
                transparent 75px,
                #F3AC3C 75px,
                #F3AC3C 95px,
                transparent 95px,
                transparent 115px,
                #F3AC3C 115px,
                #F3AC3C 135px,
                transparent 135px,
                transparent 155px,
                #F3AC3C 155px,
                #F3AC3C 175px,
                transparent 175px
                )
            }
            .two {
                width: 200px;
                background: linear-gradient(
                #998235,
                #998235 30px,
                transparent 30px,
                transparent 170px,
                #998235 170px,
                #998235 200px
                )
            }`
    },
    {
        number: 40,
        name: 'Letter B',
        html: `
            <div></div>`,
        css: `
            body {
                background: #6592CF;
            }
            div {
                width: 100px;
                height: 100px;
                background: #6592CF;
                position: absolute;
                inset: 0;
                margin: auto;
                border-radius: 100%;
                border: 50px solid;
                border-color: transparent #243D83 #243D83 #243D83;
                transform: rotate(-45deg);
            }
            div::after {
                content: '';
                position: absolute;
                left: 4px;
                top: -90px;
                height: 110px;
                width: 50px;
                background: #243D83;
                transform: rotate(45deg);
            }`
    },
    {
        number: 41,
        name: 'Fox Head',
        html: `
            <div></div>
            <div class="b"></div>`,
        css: `
            body {
                background: #293462;
            }  
            div {
                width: 50px;
                height: 140px;
                background: #FE5F55;
                position: absolute;
                inset: 0;
                margin: auto;
                left: -50px;
                border-radius: 0 10vw 0 0
            }
            div::before {
                content: '';
                background: #293462;
                border-radius: 0 40px 0 0;
                width: 80px;
                aspect-ratio: 1;
                position: absolute;
                bottom: -40;
                left: -30;
            }
            div::after {
                content: '';
                background: #293462;
                border-radius: 100%;
                width: 30px;
                aspect-ratio: 1;
                position: absolute;
                top: 60;
                left: 15;
            }
            .b {
                transform: scaleX(-1) translateX(-50px)
            }`
    },
    {
        number: 42,
        name: 'Baby',
        html: `
            <div class="head">
                <div class="circle hair"></div>
                <div class="circle hair right"></div>  
                <div class="circle eye"></div>
                <div class="circle eye right"></div>
                <div class="mouth"></div>
            </div>`,
        css: `
            body {
                background: #293462;
            }
            div {
                position: absolute;
                background: #FFF1C1;
            }
            .head {
                width: 200px;
                height: 200px;
                background: #FE5F55;
                inset: 0;
                margin: auto;
                border-radius: 100vw 100vw 200px 200px;
                overflow: hidden;
            }
            .circle {
                border-radius: 100%;
                aspect-ratio: 1;
            }
            .eye {
                width: 60px;
                top: 90px;
                left: 20px;
            }
            .eye.right {
                left: 120px;
            }
            .hair {
                width: 100px;
                top: -50px;
            }
            .hair.right {
                left: 100px;
            }
            .mouth {
                width: 40px;
                height: 10px;
                border-radius: 100vw;
                bottom: 20px;
                left: 0;
                right: 0;
                margin: auto;
            }`
    },
    {
        number: 43,
        name: 'Wrench',
        html: `
            <div></div>
            <div></div>`,
        css: `
            body {
                background: #6592CF;
            }  
            div {
                width: 80px;
                height: 182px;
                border: 30px solid #243D83;
                border-radius: 100vw;
                position: absolute;
                inset: 0;
                left: -110px;
                margin: auto;
                top: 1;
            }
            div::after {
                content: '';
                background: #6592CF;
                position: absolute;
                top: -20%;
                left: -50%;
                width: 100%;
                height: 140%
            }
            div:nth-child(2) {
                transform-origin: right;
                transform: rotate(180deg) translateX(30px);
            }`
    },
    {
        number: 44,
        name: 'Stripes',
        html: `
            <div></div>`,
        css: `
            body {
                background: #1A4341;
            }
            div {
                width: 160px;
                height: 180px;
                position: absolute;
                inset: 0;
                margin: auto;
                background: repeating-linear-gradient(
                #F3AC3C,
                #F3AC3C 20px,
                transparent 20px,
                transparent 40px
                )
            }
            div::before,
            div::after {
                content: '';
                width: 300px;
                aspect-ratio: 1;
                background: #1A4341;
                position: absolute;
                inset: 0;
                margin: auto;
                left: -400px;
                border-radius: 100%;
            }
            div::after {
                left: 130px;
            }`
    },
    {
        number: 45,
        name: 'Magical Tree',
        html: `
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>
            <div class="d"></div>`,
        css: `
            body {
                background: #1A4341;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .a,.b {
                border: 30px solid #998235;
                top: -100%;
            }
            .a {
                width: 90px;
                height: 240px;
            }
            .b {
                border-color: #F3AC3C;
                width: 210px;
                height: 360px;
            }
            .c {
                height: 30px;
                width: 270px;
                top: unset;
                bottom: 30px;
                background: #998235;
            }
            .d {
                width: 30px;
                background: #F3AC3C;
            }`
    },
    {
        number: 46,
        name: 'Mountain',
        html: `
            <div></div>`,
        css: `
            body {
                background: #293462;
            }
            div {
                width: 200px;
                aspect-ratio: 1;
                background: #FFF1C1;
                border-radius: 100%;
                position: absolute;
                inset: 0;
                margin: auto;
                overflow: hidden;
            }
            div::before,
            div::after {
                content: '';
                position: absolute;
                background: #FE5F55;
                transform: rotate(45deg);
                aspect-ratio: 1;
            }
            div::before {
                width: 100px;
                bottom: -50px;
                left: -20px;
            }
            div::after {
                width: 200px;
                left: 41px;
                bottom: -101px;
            }`
    },
    {
        number: 47,
        name: 'Corona Virus',
        html: `
            <div class="l d"></div>
            <div class="l e"></div>
            <div class="l f"></div>
            <div class="v">
                <div class="s a"></div>
                <div class="s b"></div>
                <div class="s c"></div>
            </div>`,
        css: `
            body {
                background: #1A4341;
            }
            div {
                border-radius: 100%;
                position: absolute;
                inset: 0;
                margin: auto;
                aspect-ratio: 1;
                background: #F3AC3C;
            }
            .v {
                width: 100px;
            }
            .s {
                background: #998235;
            }
            .a {
                width: 30px;
                top: -30px;
                left: -30px
            }
            .b {
                width: 20px;
                top: 50px;
            }
            .c {
                width: 10px;
                top: -50px;
                left: 50px;
            }
            .l {
                border-radius: 100vw;
                width: 180px;
                height: 10px;
                transform: rotate(var(--a)) translateX(10px);
            }
            .d {
                --a: 30deg;
            }
            .e {
                --a: -30deg;
            }
            .f {
                --a: -90deg;
            }`
    },
    {
        number: 48,
        name: 'Wash Your Hands',
        html: `
            <div></div>`,
        css: `
            body {
                background: #293462;
            }
            div {
                width: 200px;
                height: 100px;
                background: #FE5F55;
                position: absolute;
                inset: 0;
                margin: auto;
                border-radius: 20px;
                top: -20px;
                box-shadow:  0 20px #A64942;
            }
            div::after {
                content: '';
                width: 140px;
                height: 40px;
                background: #A64942;
                position: absolute;
                inset: 0;
                margin: auto;
                border-radius: 100vw;
            }`
    },
    {
        number: 50,
        name: 'Use Hand Sanitizer',
        html: `
            <div class="b"></div>
            <div class="a"></div>
            <div class="c"></div>
            <div class="d"></div>
            <div class="e"></div>
            <div class="f"></div>
            <div class="g"></div>`,
        css: `
            body {
                background: #1A4341;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
                background: #F3AC3C;
            }
            .a, .b {
                width: 100px;
                height: 140px;
                top: 60px;
                border-radius: 20px;
            }
            .a {
                background: linear-gradient(#F3AC3C 40%, #998235 0)
            }
            .a::before,
            .a::after {
                content: '';
                position: absolute;
                bottom: 0;
                background: #998235;
                width: 50%;
                height: 110px;
                border-radius: 100vw;
            }
            .a::after {
                right: 0;
                top: 0;
                background: #F3AC3C;
                height: 80px;
            }
            .b {
                top: 20px;
                width: 50px;
                border-radius: 10px;
            }
            .c {
                width: 20px;
                height: 50px;
                top: -140px;
            }
            .d, .e {
                border-radius: 100vw;
            }
            .d {
                width: 150px;
                height: 20px;
                top: -180px;
                left: 50px;
            }
            .e {
                width: 20px;
                height: 40px;
                top: -160px;
                left: 180px;
            }
            .f, .g {
                width: 20px;
                aspect-ratio: 1;
                top: -80px;
                left: 180px;
                border-radius: 100%;
                background: #998235;
            }
            .g {
                top: -20px;
            }`
    },
    {
        number: 51,
        name: 'Wear a Mask',
        html: `
            <div class="s"></div>
            <div class="m">
                <div class="v"></div>
                <div class="v b"></div>
                <div class="c"></div>
            </div>`,
        css: `
            body {
                background: #293462;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .s {
                width: 250px;
                height: 40px;
                border: 10px solid #FFF1C1;
                border-radius: 100vw;
                top: -40px;
            }
            .m {
                width: 150px;
                height: 100px;
                background: #FFF1C1;
                border-radius: 0 0 50px 50px;
            }
            .m * {
                background: #FE5F55;
                inset: unset;
            }
            .m .v {
                width: 40px;
                height: 10px;
                border-radius: 100vw;
                left: 20px;
                top: 20px;
            }
            .m .v.b {
                top: 40px
            }
            .m .c {
                width: 40px;
                aspect-ratio: 1;
                border-radius: 100%;
                right: 20px;
                bottom: 20px;
            }`
    },
    {
        number: 52,
        name: 'Break the Chain',
        html: `
            <div class="w x">
                <div class="c s"></div>
                <div class="c s b"></div>
                <div class="c s"></div>
            </div>
            <div class="w y">
                <div class="c"></div>
                <div class="c"></div>
                <div class="c"></div>
                <div class="c"></div>
            </div>`,
        css: `
            body {
                background: #6592CF;
                margin: 0;
                margin-top: 30px;
                display: flex;
            }
            .w {
                flex: 1;
                display: flex;
                gap: 35px;
                justify-content: center;
                align-items: center;
            }
            .w.x {
                margin-left: 1px;
            }
            .w.y {
                margin-right: 24px;
            }
            .c {
                width: 10px;
                height: 50px;
                background: #243D83;
                position: relative;
            }
            .c::after,
            .c.s::before {
                content: '';
                background: #243D83;
                position: absolute;
                aspect-ratio: 1;
                border-radius: 100%;
                z-index: -1;
            }
            .c::after {
                top: -10px;
                left: -5px;
                width: 20px;
            }
            .c.s::before {
                background: #EEB850;
                width: 40px;
                left: -15px;
                top: -20px;
            }
            .c.s.b::before {
                width: 60px;
                left: -25px;
                top: -40px;
            }`
    },
    {
        number: 54,
        name: 'Black Lives Matter',
        html: `
            <div class="hand">
                <div class="fingers">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="palm"></div>
                <div class="wrist"></div>
                <div class="thumb">
            </div>`,
        css: `
            body {
                background: #F9E492;
            }
            .hand {
                position: absolute;
                inset: 0;
                margin: auto;
                width: 100px;
                height: 145px;
            }
            .fingers {
                display: flex;
                gap: 5px;
                justify-content: end;
                align-items: end;
            }
            .fingers div {
                background: #191919;
                width: 20px;
                height: 45px;
                border-radius: 100vw;
            }
            .fingers div:nth-child(2) {
                height: 55px;
            }
            .fingers div:nth-child(4) {
                height: 35px;
            }
            .palm {
                background: #191919;
                height: 40px;
                margin-top: 5px;
                border-radius: 0 0 10px 10px;
            }
            .wrist {
                background: #191919;
                width: 50px;
                height: 45px;
                border-radius: 0 0 10px 10px;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
            }
            .thumb {
                position: absolute;
                background: #191919;
                width: 20px;
                height: 65px;
                border-radius: 100vw;
                border: 5px solid #F9E492;
                rotate: 60deg;
                top: 27px;
                left: 2px;
            }`
    },
    {
        number: 55,
        name: 'Windmill',
        html: `
            <div></div>
            <div></div>
            <div></div>
            <div></div>`,
        css: `
            body {
                background: #191919;
            }
            div {
                position: absolute;
                margin: auto;
                inset: 0;
                width: 50px;
                height: 100px;
                background: #4F77FF;
                border-radius: 0 100vw 100vw 0;
                transform-origin: bottom left;
                translate: 25px -50px;
            }
            div:nth-of-type(2) {
                rotate: 90deg;
                background: #F9E492;
            }
            div:nth-of-type(3) {
                rotate: 180deg;
            }
            div:nth-of-type(4) {
                rotate: 270deg;
                background: #F9E492;
            }`
    },
    {
        number: 56,
        name: 'Skull',
        html: `
            <div class="skull">
                <div class="bottom">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="top">
                    <div class="eye"></div>
                    <div class="eye right"></div>
                    <div class="nose"></div>
                </div>
            </div>`,
        css: `
            body {
                background: #191919;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
                background: #191919;
            }
            .skull {
                width: 150px;
                height: 100px;
            }
            .top {
                width: 120px;
                height: 100px;
                background: #4F77FF;
                border-radius: 100vw 100vw 50px 50px;
                top: -30px;
            }
            .top > * {
                border-radius: 100%;
                width: 40px;
                aspect-ratio: 1;
            }
            .eye {
                left: -50px;
                top: 45px;
            }
            .eye.right {
                left: 50px;
            }
            .nose {
                width: 20px;
                top: 100px;
            }
            .bottom {
                width: 80px;
                height: 80px;
                background: #4F77FF;
                border-radius: 20px;
                top: 50px;
                display: flex;
                justify-content: center;
                align-items: end;
                gap: 5px;
            }
            .bottom > * {
                height: 15px;
                width: 10px;
                border-radius: 100vw;
                position: unset;
                margin: 0;
                margin-bottom: -5px;
            }`
    },
    {
        number: 57,
        name: 'Pillars',
        html: `
            <div class="block">
                <div class="shadow">
                    <div class="circle">
                        <div class="spot"></div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="shadow">
                    <div class="circle">
                        <div class="spot"></div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="shadow">
                    <div class="circle">
                        <div class="spot"></div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="shadow">
                    <div class="circle">
                        <div class="spot"></div>
                    </div>
                </div>
            </div>`,
        css: `
            body {
                background: #191919;
            }
            div {
                position: absolute;
                inset: 0;
                margin: auto;
            }
            .block {
                --s: 55px;
                width: var(--s);
                aspect-ratio: 1;
                background: #4F77FF;
                top: calc(var(--s) * -1);
                left: var(--s);
                transform-origin: bottom left;
            }
            .circle, .spot, .shadow {
                aspect-ratio: 1;
                border-radius: 100%
            }
            .shadow {
                width: 60px;
                background: #191919;
                left: 15px;
                top: -35px;
            }
            .circle {
                width: 45px;
                background: #F9E492;
                left: 15px;
                top: -15px;
            }
            
            .spot {
                width: 30px;
                left: unset;
                bottom: unset;
                background: #4F77FF
            }
            .block:nth-of-type(2) {
                rotate: 90deg;
            }
            .block:nth-of-type(3) {
                rotate: 180deg;
            }
            .block:nth-of-type(4) {
                rotate: 270deg;
            }`
    },
    {
        number: 58,
        name: 'Rose',
        html: `
            <div class="flower">  
                <div class="dot"></div>
                <div class="top"></div>
                <div class="mid"></div>
                <div class="bottom"></div>
                <div class="connector"></div>
                <div class="stem"></div>
            </div>`,
        css: `
            body {
                background: #191919;
            }
            .flower {
                display: flex;
                flex-direction: column;
                position: absolute;
                inset: 0;
                justify-content: center;
                align-items: center;
                margin-top: -10px;
            }
            div {
                box-sizing: border-box;
            }
            .stem {
                width: 20px;
                height: 90px;
                background: #F9E492;
                border-radius: 100vw;
            }
            .connector {
                height: 40px;
                aspect-ratio: 1;
                border-radius: 100%;
                background: #F9E492;
                margin-bottom: -20px;
            }
            .bottom {
                width: 100px;
                height: 50px;
                background: #4F77FF;
                border-radius: 0 0 100vw 100vw;
                margin-bottom: -20px;
                z-index: 2;
            }
            .mid {
                width: 160px;
                height: 50px;
                background: #4F77FF;
                border-radius: 30px 30px 70px 70px;
                border: 10px solid #191919;
                z-index: 3;
                margin-bottom: -10px;
            }
            .top {
                width: 120px;
                height: 50px;
                background: #4F77FF;
                border-radius: 40px 40px 90px 90px;
                margin-bottom: -30px;
                border: 10px solid #191919;
                z-index: 4;
            }
            .dot {
                width: 50px;
                aspect-ratio: 1;
                background: #4F77FF;
                border-radius: 100%;
                margin-bottom: -30px;
                border: 10px solid #191919;
                z-index: 5;
            }`
    },
    {
        number: 59,
        name: 'Earth',
        html: `
            <div class="circle main"></div>
            <div class="circle shadow"></div>
            <div class="circle shadow right"></div>
            <div class="line"></div>`,
        css: `
            body {
                background: #191919;
            }
            .circle {
            aspect-ratio: 1;
            border-radius: 100%;
            position: absolute;
            inset: 0;
            margin: auto;
            }
            .main {
            width: 150px;
            background: repeating-linear-gradient(
                #4F77FF,
                #4F77FF 30px,
                #191919 30px,
                #191919 40px
            );
            }
            .shadow {
            width: 160px;
            height: 177px;
            border-radius: 100%;
            left: -90px;
            border: 10px solid #191919;
            }
            .right {
            left: 90px;
            }
            .line {
            background: #191919;
            width: 10px;
            height: 100%;
            position: absolute;
            inset: 0;
            margin: auto;
            }`
    },
]