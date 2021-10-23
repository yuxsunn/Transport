const pathSymbols = {
    private_vehicle:
    'path://M916.879974 297.370726l1.264858 0L918.144833 178.107467c0-75.388006-59.061555-134.44608-134.453658-134.44608L279.901063 43.661387c-77.765222 0-145.983693 62.831002-145.983693 134.44608l0 119.264291 8.980903 0C53.968282 341.220454 18.59113 438.246195 18.59113 505.558323l0 201.534016c0 47.474278 24.289178 91.31264 59.908813 117.81632-0.647782 2.606387-1.028506 5.309952-1.028506 8.093286L77.471437 908.593574c0 18.87488 15.732941 34.59799 34.597376 34.59799l75.571189 0c10.839347 0 19.022029-4.102451 24.596173-10.286285 6.021427-5.562675 10.002227-13.646848 10.002227-24.311706l0-57.662281L841.36613 850.931293 841.36613 908.593574c0 18.87488 15.734989 34.59799 34.599424 34.59799l75.561979 0c10.887373 0 19.098726-4.135219 24.675021-10.360934 5.974323-5.563699 9.920307-13.620224 9.920307-24.237056l0-75.590606c0-3.410637-0.530125-6.71703-1.487974-9.851392 30.052659-25.74336 48.836198-67.339674 48.836198-116.058317L1033.471085 505.558287C1033.471078 446.082662 997.449216 343.120691 916.879974 297.370726zM203.113062 178.107494c0-36.747981 41.276723-65.253171 76.786893-65.253171l503.791213 0c36.592845 0 65.256858 28.662784 65.256858 65.253171l0 97.365538c-6.855373-0.7552-13.905203-1.166541-21.174067-1.166541L248.412641 274.306492c-16.05632 0-31.137382 1.315942-45.298483 3.752448L203.114158 178.107467zM779.751322 735.607706 272.31089 735.607706l0 46.130643L153.942259 781.738349c-34.620928 0-66.155315-35.587482-66.155315-74.645094L87.786944 505.558287c0-1.619866 4.369715-162.058957 160.624742-162.058957l579.362402 0c103.806362 0 136.500326 126.327194 136.500326 162.058957l0 201.534016c0 36.196352-19.144806 74.645094-54.622208 74.645094L779.751362 781.737398 779.751362 735.607754zM268.943053 426.883482c-65.131008 0-118.108672 52.976538-118.108672 118.093619 0 65.115034 52.977664 118.092595 118.108672 118.092595 65.120768 0 118.098432-52.977562 118.098432-118.092595C387.041485 479.860019 334.063821 426.883482 268.943053 426.883482zM268.943053 593.874739c-26.974413 0-48.912998-21.93664-48.912998-48.896614 0-26.963046 21.938586-48.90071 48.912998-48.90071 26.963149 0 48.901734 21.937664 48.901734 48.90071C317.844787 571.938099 295.906202 593.874739 268.943053 593.874739zM782.049792 426.883482c-62.843802 0-113.966182 51.117261-113.966182 113.947238 0 62.821786 51.122381 113.927782 113.966182 113.927782 62.833562 0 113.94263-51.105997 113.94263-113.927782C895.991398 478.001664 844.883354 426.883482 782.049792 426.883482zM782.049792 585.565491c-24.687206 0-44.769485-20.069069-44.769485-44.734874 0-24.670925 20.082176-44.753306 44.769485-44.753306 24.673997 0 44.745933 20.082381 44.745933 44.753306C826.794701 565.495398 806.723789 585.565491 782.049792 585.565491z',
    tram:
      'path://M890.453333 901.226667a21.333333 21.333333 0 0 1 0.106667 30.122666l-1.493333 1.493334a21.269333 21.269333 0 0 1-30.122667-0.085334L736.832 810.666667H287.936l-122.112 122.090666a21.269333 21.269333 0 0 1-30.122667 0.085334l-1.493333-1.493334a21.333333 21.333333 0 0 1 0.064-30.122666L224.832 810.666667H171.050667c-23.552 0-42.666667-19.029333-42.666667-42.666667V170.666667c0-47.125333 38.08-85.333333 85.12-85.333334h597.76a85.248 85.248 0 0 1 85.12 85.333334v597.333333c0 23.552-18.986667 42.666667-42.666667 42.666667h-53.781333l90.538667 90.56zM171.072 768h682.666667V170.666667c0-23.530667-19.050667-42.666667-42.453334-42.666667h-597.76c-23.402667 0-42.453333 19.136-42.453333 42.666667v597.333333z m128-170.666667a42.666667 42.666667 0 1 1-0.042667 85.354667A42.666667 42.666667 0 0 1 299.050667 597.333333z m426.666667 0a42.666667 42.666667 0 1 1-0.042667 85.354667A42.666667 42.666667 0 0 1 725.717333 597.333333z m-42.538667 256c11.690667 0 21.184 9.536 21.184 21.290667a21.184 21.184 0 0 1-21.184 21.290667H341.546667a21.248 21.248 0 0 1-21.184-21.290667c0-11.84 9.493333-21.290667 21.184-21.290667h341.632zM171.050667 512h682.666666v42.666667h-682.666666v-42.666667z',
    walking:
     'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z',
    train:
      'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
    bicycle: 'path://M752 416c-9.824 0-19.456 0.768-28.96 1.92L645.664 176H512a32 32 0 0 0 0 64h86.912l21.248 66.432-328.096 198.432-70.688-112.864H256a32 32 0 0 0 0-64H96a32 32 0 0 0 0 64h49.856l75.584 120.672c-4.448-0.32-8.896-0.672-13.44-0.672C110.944 512 32 590.976 32 688S110.944 864 208 864s176-78.976 176-176a175.456 175.456 0 0 0-57.088-129.376l313.312-189.536 20.8 64.96C573.664 469.984 512 555.872 512 656c0 132.352 107.648 240 240 240s240-107.648 240-240-107.648-240-240-240z m-544 384C146.24 800 96 749.76 96 688S146.24 576 208 576s112 50.24 112 112S269.76 800 208 800z m544 32a176.224 176.224 0 0 1-176-176 176.16 176.16 0 0 1 104.608-160.704l56.736 177.344a31.968 31.968 0 1 0 60.928-19.52l-55.232-172.672c2.976-0.128 5.952-0.448 8.96-0.448 97.024 0 176 78.976 176 176S849.024 832 752 832z',
    bus: 'path://M238.933333 406.755556h38.874074l-11.377777 54.044444h-27.496297v-54.044444z m556.562963 71.111111c-12.325926-23.703704-24.651852-47.407407-36.029629-70.162963-5.688889-11.377778-8.533333-11.377778-15.170371-11.377778H204.8c-6.637037 17.066667-10.42963 35.081481-10.42963 54.044444v146.014815c13.274074 3.792593 25.6 6.637037 38.874074 10.42963h8.533334c0-13.274074 3.792593-25.6 13.274074-36.977778h47.407407l2.844445 7.585185h7.585185l2.844444-7.585185h47.407408c9.481481 11.377778 12.325926 23.703704 13.274074 36.977778h196.266666c0-13.274074 3.792593-25.6 13.274075-36.977778h47.407407l2.844444 7.585185h9.481482l2.844444-7.585185h47.407408c9.481481 11.377778 12.325926 23.703704 13.274074 36.977778h5.688889v-58.785185h-71.111111l11.377777-54.044445H768v54.044445h-7.585185V606.814815h13.274074c11.377778-2.844444 18.962963-12.325926 21.807407-25.6V483.555556c5.688889 1.896296 11.377778 3.792593 13.274074 5.688888 1.896296 1.896296 2.844444 4.740741 3.792593 7.585186h-3.792593s1.896296 31.288889 1.896297 32.237037c0 0.948148 12.325926 0 14.222222 0 1.896296 0-1.896296-31.288889-3.792593-32.237037-0.948148 0-1.896296-0.948148-3.792592-0.948149-0.948148-4.740741-2.844444-9.481481-5.688889-11.377777-2.844444-1.896296-10.42963-4.740741-16.118519-6.637037zM231.348148 612.503704h10.42963v7.585185h-10.42963v-7.585185z m478.814815 0h65.422222v7.585185h-65.422222v-7.585185z m-332.8 0h195.318518v7.585185H377.362963v-7.585185zM341.333333 573.62963c8.533333 0 16.118519 3.792593 20.85926 8.533333 5.688889 5.688889 8.533333 13.274074 8.533333 20.859259 0 8.533333-3.792593 16.118519-8.533333 20.859259-5.688889 5.688889-13.274074 8.533333-20.85926 8.533334-8.533333 0-16.118519-3.792593-20.859259-8.533334-5.688889-5.688889-8.533333-13.274074-8.533333-20.859259 0-8.533333 3.792593-16.118519 8.533333-20.859259 5.688889-4.740741 13.274074-8.533333 20.859259-8.533333z m-63.525926 0c8.533333 0 16.118519 3.792593 20.85926 8.533333 5.688889 5.688889 8.533333 13.274074 8.533333 20.859259 0 8.533333-3.792593 16.118519-8.533333 20.859259-5.688889 5.688889-13.274074 8.533333-20.85926 8.533334-8.533333 0-16.118519-3.792593-20.859259-8.533334-5.688889-5.688889-8.533333-13.274074-8.533333-20.859259 0-8.533333 3.792593-16.118519 8.533333-20.859259 4.740741-4.740741 12.325926-8.533333 20.859259-8.533333z m10.42963 19.911111c2.844444 2.844444 4.740741 6.637037 4.740741 10.429629 0 3.792593-1.896296 7.585185-4.740741 10.42963-2.844444 2.844444-6.637037 4.740741-10.42963 4.740741-3.792593 0-7.585185-1.896296-10.429629-4.740741-2.844444-2.844444-4.740741-6.637037-4.740741-10.42963 0-3.792593 1.896296-7.585185 4.740741-10.429629 2.844444-2.844444 6.637037-4.740741 10.429629-4.740741 3.792593 0 7.585185 1.896296 10.42963 4.740741z m63.525926 0c2.844444 2.844444 4.740741 6.637037 4.740741 10.429629 0 3.792593-1.896296 7.585185-4.740741 10.42963-2.844444 2.844444-6.637037 4.740741-10.42963 4.740741-3.792593 0-7.585185-1.896296-10.429629-4.740741-2.844444-2.844444-4.740741-6.637037-4.740741-10.42963 0-3.792593 1.896296-7.585185 4.740741-10.429629 2.844444-2.844444 6.637037-4.740741 10.429629-4.740741 4.740741 0 8.533333 1.896296 10.42963 4.740741z m322.37037-19.911111c8.533333 0 16.118519 3.792593 20.85926 8.533333 5.688889 5.688889 8.533333 13.274074 8.533333 20.859259 0 8.533333-3.792593 16.118519-8.533333 20.859259-5.688889 5.688889-13.274074 8.533333-20.85926 8.533334-8.533333 0-16.118519-3.792593-20.859259-8.533334-5.688889-5.688889-8.533333-13.274074-8.533333-20.859259 0-8.533333 3.792593-16.118519 8.533333-20.859259 5.688889-4.740741 13.274074-8.533333 20.859259-8.533333z m-63.525926 0c8.533333 0 16.118519 3.792593 20.85926 8.533333 5.688889 5.688889 8.533333 13.274074 8.533333 20.859259 0 8.533333-3.792593 16.118519-8.533333 20.859259-5.688889 5.688889-13.274074 8.533333-20.85926 8.533334-8.533333 0-16.118519-3.792593-20.859259-8.533334-5.688889-5.688889-8.533333-13.274074-8.533333-20.859259 0-8.533333 3.792593-16.118519 8.533333-20.859259 4.740741-4.740741 12.325926-8.533333 20.859259-8.533333z m9.481482 19.911111c2.844444 2.844444 4.740741 6.637037 4.740741 10.429629 0 3.792593-1.896296 7.585185-4.740741 10.42963-2.844444 2.844444-6.637037 4.740741-10.42963 4.740741-3.792593 0-7.585185-1.896296-10.429629-4.740741-2.844444-2.844444-4.740741-6.637037-4.740741-10.42963 0-3.792593 1.896296-7.585185 4.740741-10.429629 2.844444-2.844444 6.637037-4.740741 10.429629-4.740741 4.740741 0 8.533333 1.896296 10.42963 4.740741z m64.474074 0c2.844444 2.844444 4.740741 6.637037 4.740741 10.429629 0 3.792593-1.896296 7.585185-4.740741 10.42963-2.844444 2.844444-6.637037 4.740741-10.42963 4.740741-3.792593 0-7.585185-1.896296-10.429629-4.740741-2.844444-2.844444-4.740741-6.637037-4.740741-10.42963 0-3.792593 1.896296-7.585185 4.740741-10.429629 2.844444-2.844444 6.637037-4.740741 10.429629-4.740741 4.740741 0 7.585185 1.896296 10.42963 4.740741zM287.288889 406.755556l-11.377778 54.044444h88.177778l11.377778-54.044444h-88.177778z m96.711111 0h83.437037l-11.377778 54.044444h-83.437037l11.377778-54.044444z m92.918519 0h88.177777l-11.377777 54.044444h-88.177778l11.377778-54.044444z m97.659259 0h87.229629l-11.377777 54.044444h-87.22963l11.377778-54.044444z m96.711111 0h60.681481l29.392593 54.044444H659.911111l11.377778-54.044444z m-388.740741 88.177777h74.903704l-11.377778 54.044445h-54.044444l-9.481482-54.044445z m84.385185 0h84.385186l-11.377778 54.044445h-84.385185l11.377777-54.044445z m93.866667 0h88.177778l-11.377778 54.044445h-88.177778l11.377778-54.044445z m97.659259 0H644.740741l-11.377778 54.044445h-87.22963l12.325926-54.044445zM790.755556 483.555556v79.644444l-9.481482-10.42963V483.555556h9.481482z m-18.014815 85.333333h19.911111v11.377778h-19.911111V568.888889z m-17.066667 37.925926h-36.977778v-58.785185h36.977778V606.814815z',
    taxi: 'path://M924 483.28l-44-169.68c-19.2-70.4-83.2-121.6-153.6-121.6H704V128c0-35.34-28.66-64-64-64H384c-35.34 0-64 28.66-64 64v64h-22.4c-70.4 0-134.4 51.2-153.6 121.6l-44 169.68C42.82 496.08 0 546.94 0 608v96c0 47.26 25.9 88.08 64 110.24V896c0 35.34 28.66 64 64 64h64c35.34 0 64-28.66 64-64v-64h512v64c0 35.34 28.66 64 64 64h64c35.34 0 64-28.66 64-64v-81.76c38.1-22.18 64-63 64-110.24v-96c0-61.06-42.82-111.92-100-124.72zM192 704c-35.34 0-64-28.66-64-64s28.66-64 64-64 64 28.66 64 64-28.66 64-64 64z m41.1-224l34.4-132.72c4.46-16.32 19.18-27.28 30.12-27.28h428.8c10.94 0 25.66 10.96 29.7 25.72L790.9 480h-557.8zM832 704c-35.34 0-64-28.66-64-64s28.66-64 64-64 64 28.66 64 64-28.66 64-64 64z',
    other: 'path://M960 64H64a64 64 0 0 0-64 64v64h1024V128a64 64 0 0 0-64-64zM0 512h192v64H0v256h1024V576h-192V512h192V256H0v256z m704 64H320V512h384v64zM0 960a64 64 0 0 0 64 64h896a64 64 0 0 0 64-64v-64H0v64z',
    motorcycle:'path://M398.222222 612.503704c1.896296 5.688889 3.792593 11.377778 4.740741 18.014815h-43.614815V644.740741h-6.637037c-0.948148-12.325926-6.637037-23.703704-15.17037-31.288889-9.481481-9.481481-22.755556-15.17037-37.925926-15.170371-14.222222 0-27.496296 5.688889-37.925926 15.170371-9.481481 9.481481-15.17037 22.755556-15.17037 37.925926 0 14.222222 5.688889 27.496296 15.17037 37.925926 9.481481 9.481481 22.755556 15.17037 37.925926 15.17037 14.222222 0 26.548148-5.688889 36.029629-14.222222h22.755556v19.911111h28.444444c-3.792593 5.688889-7.585185 10.42963-12.325925 15.17037-18.962963 18.962963-45.511111 30.340741-73.955556 30.340741-29.392593 0-54.992593-11.377778-73.955556-30.340741s-30.340741-45.511111-30.34074-73.955555c0-29.392593 11.377778-54.992593 30.34074-73.955556 18.014815-18.014815 41.718519-29.392593 69.214815-30.340741-4.740741-4.740741-10.42963-9.481481-14.222222-14.222222l-25.6 1.896297-76.8 55.94074-6.637037-5.688889 73.007407-76.8 8.533334-10.429629c-0.948148-0.948148-1.896296-2.844444-2.844445-3.792593-4.740741-13.274074-9.481481-25.6-15.17037-38.874074 30.340741 1.896296 60.681481 2.844444 91.97037 4.740741l17.066667-31.288889c78.696296 9.481481 137.481481 20.859259 182.044444 33.185185V521.481481c-9.481481 5.688889-18.014815 11.377778-27.496296 17.066667 4.740741 23.703704 13.274074 44.562963 33.185185 61.62963h65.422222c12.325926-36.02963 27.496296-71.111111 59.733334-105.244445l-6.637037-60.681481-1.896297-22.755556c-4.740741 0.948148-9.481481 1.896296-14.222222 1.896297v12.325926h-9.481481V417.185185h-50.251852v-25.6H625.777778v-7.585185h9.481481v10.42963c3.792593-0.948148 8.533333-0.948148 12.325926-1.896297l-1.896296-24.651852h11.377778l-1.896297-7.585185 17.066667-4.74074-9.481481-38.874075c-10.42963-0.948148-18.962963-11.377778-18.962963-22.755555 0-13.274074 9.481481-22.755556 20.859259-22.755556 11.377778 0 20.859259 10.42963 20.859259 22.755556 0 7.585185-3.792593 15.17037-9.481481 18.962963l14.222222 55.940741h7.585185l36.977778-64.474074c-1.896296-3.792593-2.844444-7.585185-2.844445-11.377778 0-13.274074 9.481481-22.755556 20.85926-22.755556 11.377778 0 20.859259 10.42963 20.859259 22.755556 0 13.274074-9.481481 22.755556-20.859259 22.755555-2.844444 0-5.688889-0.948148-8.533334-1.896296l-31.288889 54.992593 35.081482 0.948148 9.481481 26.548148-14.222222 4.740741c23.703704 36.977778 39.822222 75.851852 41.718519 118.518518h-42.666667c-5.688889 2.844444-10.42963 5.688889-15.17037 8.533334l4.74074 17.066666c5.688889-0.948148 10.42963-0.948148 16.118519-0.948148 29.392593 0 54.992593 11.377778 73.955555 30.340741s30.340741 45.511111 30.340741 73.955555c0 29.392593-11.377778 54.992593-30.340741 73.955556s-45.511111 30.340741-73.955555 30.340741c-29.392593 0-54.992593-11.377778-73.955556-30.340741-11.377778-11.377778-19.911111-25.6-25.6-41.718519v2.844445h-113.777777v-55.940741H434.251852v-2.844444c-12.325926-1.896296-24.651852-7.585185-36.02963-12.325926z m-122.311111 18.962963l-6.637037 16.118518 64.474074 28.444445 1.896296 0.948148h37.925926v19.911111H521.481481v-51.2H373.57037v14.222222h-35.081481l-62.577778-28.444444z m428.562963-85.333334c-7.585185 6.637037-15.17037 14.222222-21.807407 21.807408 7.585185-5.688889 15.17037-10.42963 23.703703-14.222222l-1.896296-7.585186z m30.340741 109.985186L720.592593 604.918519c-3.792593 1.896296-6.637037 4.740741-9.481482 7.585185-9.481481 9.481481-15.17037 22.755556-15.17037 37.925926 0 14.222222 5.688889 27.496296 15.17037 37.925926 9.481481 9.481481 22.755556 15.17037 37.925926 15.17037 14.222222 0 27.496296-5.688889 37.925926-15.17037 9.481481-9.481481 15.17037-22.755556 15.17037-37.925926 0-14.222222-5.688889-27.496296-15.17037-37.925926-9.481481-9.481481-22.755556-15.17037-37.925926-15.170371h-2.844444l14.222222 52.148148-25.6 6.637038z',
    fix_object: 'path://M1012.403397 815.960949l-161.852582-58.282925c-20.893879-7.497803-36.389339-25.392561-40.987992-47.186176C774.673045 542.541052 598.024797 0 511.850044 0 397.183638 0 244.028507 539.741872 213.437469 709.192229c-4.098799 22.49341-19.794201 41.087963-41.287903 48.885678L11.29669 815.960949c-14.995607 5.398418-14.995607 26.69218 0 32.090598l477.46012 171.949625c7.497803 2.699209 15.295519 3.998828 23.093234 3.998828s15.595431-1.299619 23.093234-3.998828l477.460119-171.949625c15.095577-5.498389 15.095577-26.69218 0-32.090598zM359.994533 404.681441c1.299619-4.098799 2.599239-8.197598 3.998828-12.196427 29.49136-90.473494 59.882456-168.850532 87.874256-226.633603 15.295519-31.590745 29.791272-57.083276 43.287318-75.977741 4.498682-6.398126 8.49751-11.29669 11.896515-15.195548 10.896808 14.895636 28.491653 43.187347 52.984477 95.472029 27.691887 59.182661 58.782778 137.459729 89.973641 226.433662l2.199355 6.298155c2.899151 8.297569-1.39959 17.394904-9.697159 20.394025-88.174168 31.390803-183.746168 31.890657-272.52016 1.39959-8.197598-2.699209-12.69628-11.796544-9.997071-19.994142z m365.892805 376.089817c-7.097921 4.798594-15.795372 9.8971-26.492239 14.995607-48.285854 22.893293-116.665821 35.989456-187.545055 35.989456s-139.159231-13.096163-187.545055-35.989456c-10.696866-5.098506-19.494289-10.197013-26.492239-14.995607-18.994435-12.996193-25.892414-24.392854-25.892414-28.991506 0.099971-3.299033 1.199649-13.096163 4.498682-31.290833 3.698916-20.394025 10.097042-51.284975 20.893879-95.172117 0.999707-3.898858 1.899444-7.797716 2.89915-11.796544 0.599824-2.299326 3.099092-3.598946 5.298448-2.79918l36.889193 14.195841c54.584009 20.993849 111.967197 31.490774 169.450356 31.490774 57.383189 0 114.766377-10.496925 169.450356-31.490774l32.790394-12.59631c2.199356-0.799766 4.598653 0.399883 5.298447 2.599239 1.099678 3.898858 2.199356 7.897686 3.299034 11.696573 11.896515 42.587523 19.294347 72.97862 23.693059 93.372645 3.798887 17.694816 5.298448 27.791858 5.498389 31.790686-0.299912 4.798594-7.197891 16.095285-25.992385 28.991506z'
    //motorcycle: new URL("https://img.icons8.com/ios-filled/50/000000/motorcycle.png"),  
    };
