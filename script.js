const casas = [

  /*0*/ { background: "img/fundo/inicio-capa.png", tipo: "descricao"}, 
  /*1*/ { background: "img/fundo/inicio-integrantes.png" , tipo: "descricao" },

  /*2*/ { background: "img/fundo/inicio-parcerias.png" , tipo: "descricao" },
  /*3*/ { background: "img/fundo/inicio-proadi.png" , tipo: "descricao" },
  /*4*/ { background: "img/fundo/inicio-hmv.png" , tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*5*/ { background: "img/fundo/inicio-Proadi-hmv.png" , tipo: "descricao" },
  /*6*/ { background: "img/fundo/inicio-Escritorioo.png" , tipo: "descricao" },
  /*7*/ { background: "img/fundo/inicio-areas-projetos.png" , tipo: "descricao" },
  /*8*/ { background: "img/fundo/inicio-indicadores-graficos.png" , tipo: "descricao" },
  /*9*/ { background: "img/fundo/inicio-indicadores.png" , tipo: "descricao" },
  /*10*/{ background: "img/fundo/inicio-escritorio.png" , tipo: "descricao" },
  /*11*/{ background: "img/fundo/inicio-apresentacao.png", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*12*/ { background: "img/fundo/projeto-gestao-hospitalar.png", video:"https://www.youtube.com/watch?v=4yg0L9vBS2c",  tipo: "projeto" },

  /*13*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Gestão Hospitalar RS é focado exclusivamente na gestão financeira de hospitais?", resposta: false, explicacao: "O projeto abrange aspectos administrativos e assistenciais, não apenas financeiros.", tipo: "pergunta" },


  /*14*/ { background:"img/fundo/projeto-saude-em-nossa-maos.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=KXgYEJYcOeQ",  tipo: "projeto"  },

  /*15*/ {background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Saúde em nossas Mãos trata de agricultura familiar?", resposta: false, explicacao: "O projeto foca na segurança e qualidade no atendimento hospitalar.", tipo: "pergunta" },

  /*16*/ { background:"img/fundo/projeto-cardiopatia-congenita.png",video:"https://www.youtube.com/watch?v=he8cB1eDdMM",  tipo: "projeto"  },
  
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  
  /*17*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "cardiopatia congenita?", resposta: true, explicacao: "cardiopatia congenita.", tipo: "pergunta"},


  /*18*/ { background:"img/fundo/projeto-diretrizes.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=oNKqp0AP9_o",  tipo: "projeto"}, 

  /*19*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Preceptoria Médica forma apenas profissionais de enfermagem?", resposta: false, explicacao: "O projeto é voltado à formação de novos médicos.", tipo: "pergunta"},

  /*20*/ { background:"img/fundo/projeto-preceptoria-medica.png",titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=WA6BLGVNN14",  tipo: "projeto"},  

  /*23*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto ATS Educação capacita gestores apenas para gestão financeira?", resposta: false, explicacao: "O projeto aborda avaliação de tecnologias em saúde e não se limita à gestão financeira.", tipo: "pergunta"},

  /*22*/ { background: "img/fundo/projeto-ats-educação.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=7mvu2ebAU8E",  tipo: "projeto"}, 

  /*19*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "Diretrizes bla bla bla?", resposta: false, explicacao: "O estudo é direcionado para doenças crônicas, não agudas.", tipo: "pergunta"},

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*22*/ { background:"img/fundo/projeto-artemis.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=X2WEOnF5mao",  tipo: "projeto"  },

  /*25*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Artemis está relacionado à transformação digital na saúde?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },
  
  /*22*/ { background:"img/fundo/projeto-estudo-otimo.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*27*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "Estudo otimo alterar pergunta?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*28*/ {background:"img/fundo/projeto-onco-genomas.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=wOkTcLAxYPQ",  tipo: "projeto"  },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*29*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Onco-Genomas Brasil analisa tratamentos personalizados para câncer?", resposta: true, explicacao: "O projeto estuda o perfil genético de cânceres no Brasil.", tipo: "pergunta" },


  /*30*/ {background:"img/fundo/projeto-pos-covid.png", titulo: "", conteudo: "",  video: "/img/videoteste.mp4",  tipo: "projeto" }, 

  /*31*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Pós-Covid Brasil estuda apenas os impactos físicos da Covid-19?", resposta: false, explicacao: "O estudo avalia os impactos físicos, mentais e sociais.", tipo: "pergunta" },

  /*32*/ {background:"img/fundo/projeto-physiosync.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=Atw5AdfzTm8",  tipo: "projeto"  },  
  
  /*33*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "colocar pergunta sobre o Projeto PhysioSync-HF Follow-UP?", resposta: true, explicacao: "colocar resposta Projeto PhysioSync-HF Follow-UP.", tipo: "pergunta" },

  /*34*/ {background:"img/fundo/projeto-rehab-vm.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=KUPtzfuNgH0",  tipo: "projeto"  }, 

  /*31*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Rehab-VM Brasil é voltado à reabilitação de pacientes com doenças respiratórias leves?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*19*/ {background:"img/fundo/projeto-resilient.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*31*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O Projeto Resilient-TNK alterar pergunta?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },

  /*19*/{background:"img/fundo/projeto-tb-ped.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },
  
  /*31*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto TB PED é voltado ao tratamento da tuberculose pediátrica?", resposta: true, explicacao: "O projeto foca no diagnóstico e tratamento da tuberculose pediátrica.", tipo: "pergunta" },

  /*19*/ {background:"img/fundo/projeto-trident.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=-OOP8JS5OGQ",  tipo: "projeto"  },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*39*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Trident é voltado a diagnósticos mais rápidos?", resposta: true, explicacao: "O projeto busca avanços tecnológicos para diagnósticos rápidos e precisos.", tipo: "pergunta" },

  /*21*/ {background:"img/fundo/projeto-physiosync.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=Atw5AdfzTm8",  tipo: "projeto"  },

  /*40*/ {background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto VigiaSUS trata de agricultura sustentável?", resposta: false, explicacao: "O projeto é focado na vigilância em saúde e monitoramento de doenças emergentes.", tipo: "pergunta" },
  
  /*20*/ { background:"img/fundo/projeto-vigiasus.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=ZU4Z985I9iU",  tipo: "projeto"  },



  /*41*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto TeleNordeste utiliza telemedicina para ampliar o acesso à saúde?", resposta: true, explicacao: "O projeto utiliza telemedicina para expandir o acesso à saúde no Nordeste do Brasil.", tipo: "pergunta" },

  /*22*/ { background:"img/fundo/projeto-telenordeste.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=CS-8HO-Ci1I",  tipo: "projeto"  },

  /*41*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "colocar pergunta sobre o Projeto PhysioSync-HF Follow-UP?", resposta: true, explicacao: "colocar resposta Projeto PhysioSync-HF Follow-UP.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  /*28*/ {background:"img/fundo/projeto-rehab-vm.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=KUPtzfuNgH0",  tipo: "projeto"  },

  /*47*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Rehab-VM Brasil é voltado à reabilitação de pacientes com doenças respiratórias leves?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },

  /*23*/ { background:"img/fundo/projeto-resilient.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*47*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O Projeto Resilient-TNK alterar pergunta?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },


  /*26*/ {background:"img/fundo/projeto-tb-ped.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  /*45*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto TB PED é voltado ao tratamento da tuberculose pediátrica?", resposta: true, explicacao: "O projeto foca no diagnóstico e tratamento da tuberculose pediátrica.", tipo: "pergunta" },

  /*33*/ { background:"img/fundo/projeto-telenordeste.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=CS-8HO-Ci1I",  tipo: "projeto"  },

  /*43*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto VigiaSUS trata de agricultura sustentável?", resposta: false, explicacao: "O projeto é focado na vigilância em saúde e monitoramento de doenças emergentes.", tipo: "pergunta" },

  /*24*/ { background:"img/fundo/projeto-vigiasus.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=ZU4Z985I9iU",  tipo: "projeto"  },

  /*46*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Trident é voltado a diagnósticos mais rápidos?", resposta: true, explicacao: "O projeto busca avanços tecnológicos para diagnósticos rápidos e precisos.", tipo: "pergunta" },

  /*27*/ {  background:"img/fundo/projeto-trident.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=-OOP8JS5OGQ",  tipo: "projeto"  },

  /*51*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto TeleNordeste utiliza telemedicina para ampliar o acesso à saúde?", resposta: true, explicacao: "O projeto utiliza telemedicina para expandir o acesso à saúde no Nordeste do Brasil.", tipo: "pergunta" },

];

document.querySelectorAll('.casa').forEach((casa, index) => {
  if (casa.classList.contains('casaVazia') || index >= casas.length) {
    return; 
  }

  const dadosCasa = casas[index];


  casa.addEventListener('click', () => {
    if (!dadosCasa) return; 

    const carta = document.getElementById('carta');
    const tituloCarta = document.getElementById('titulo');
    const conteudoCarta = document.getElementById('conteudo');
    const botoesPergunta = document.getElementById('botoes-pergunta');
    const videoArea = document.getElementById('video-area');
    const videoFrame = document.getElementById('video-frame');
    const nomes = document.getElementById('nomes');
    const resultado = document.getElementById('resultado');

    tituloCarta.textContent = dadosCasa.titulo;
    conteudoCarta.textContent = dadosCasa.conteudo || "";
    botoesPergunta.style.display = 'none';
    videoArea.style.display = 'none';
    nomes.style.display = 'none';

 
    if (dadosCasa.background) {
      carta.style.backgroundImage = `url(${dadosCasa.background})`;
      carta.style.backgroundSize = "Cover"
      carta.style.backgroundAttachment = "fixed";
      carta.style.backgroundPosition = "top center";
      carta.style.backgroundRepeat = "no-repeat";
      carta.style.backgroundSize = "100% 100%";

    } else {
      carta.style.background = "white"; 
    }

    if (dadosCasa.tipo === 'projeto' && dadosCasa.video) {
      videoArea.style.display = 'block';
      if (dadosCasa.video.includes("youtube.com") || dadosCasa.video.includes("youtu.be")) {
        videoFrame.src = dadosCasa.video.replace("watch?v=", "embed/");
    } else {
        videoFrame.src = dadosCasa.video;
    }

    } else if (dadosCasa.tipo === 'pergunta') {
      conteudoCarta.textContent = dadosCasa.pergunta;
      botoesPergunta.style.display = 'block';

      window.responder = (respostaUsuario) => {
        resultado.textContent = respostaUsuario === dadosCasa.resposta
          ? `Correto! ${dadosCasa.explicacao}`
          : `Errado. ${dadosCasa.explicacao}`;
          
      };
    }

    carta.style.display = 'block';
  });
});


window.fecharCarta = () => {
  const carta = document.getElementById('carta');
  carta.style.display = 'none';
  carta.style.background = "white"; 
  document.getElementById('resultado').textContent = '';
  document.getElementById('video-frame').src = "about:blank"; 
};
