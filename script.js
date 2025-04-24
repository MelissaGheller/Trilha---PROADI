const casas = [

  /*0*/ { background: "img/fundo/inicio-capa.png", tipo: "descricao"}, 
  /*1*/ { background: "img/fundo/inicio-integrantes.jpg" , tipo: "descricao" },

  /*2*/ { background: "img/fundo/inicio-parcerias.png" , tipo: "descricao" },
  /*3*/ { background: "img/fundo/inicio-proadi.png" , tipo: "descricao" },
  /*4*/ { background: "img/fundo/inicio-hmv.png" , tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*5*/ { background: "img/fundo/inicio-proadi-hmv.jpg" , tipo: "descricao" },
  /*6*/ { background: "img/fundo/inicio-organograma.jpg" , tipo: "descricao" },
  /*7*/ { background: "img/fundo/inicio-areas-projetos.jpg" , tipo: "descricao" },
  /*8*/ { background: "img/fundo/inicio-indicadores-graficos.jpg" , tipo: "descricao" },
  /*9*/ { background: "img/fundo/inicio-indicadores.jpg" , tipo: "descricao" },
  /*10*/{ background: "img/fundo/inicio-escritorio.jpg" , tipo: "descricao" },
  /*11*/{ background: "img/fundo/inicio-verdadeiro-falso.png", tipo: "descricao" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*12*/ { background: "img/fundo/projeto-gestao-hospitalar.png", video:"https://www.youtube.com/watch?v=4yg0L9vBS2c",  tipo: "projeto" },

  /*13*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Gestão Hospitalar RS é focado exclusivamente na gestão financeira de hospitais?", resposta: false, explicacao: "O projeto abrange aspectos administrativos e assistenciais, não apenas financeiros.", tipo: "pergunta" },

  /*14*/ { background:"img/fundo/projeto-saude-em-nossa-maos.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=KXgYEJYcOeQ",  tipo: "projeto"  },

  /*13*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O foco do projeto é a prevenção de infecções em enfermarias pediátricas?", resposta: false, explicacao: "O foco do projeto é a prevenção de infecções em UTIs, não em enfermarias pediátricas.", tipo: "pergunta" },

  /*16*/ { background:"img/fundo/projeto-cardiopatia-congenita.png",video:"https://www.youtube.com/watch?v=he8cB1eDdMM",  tipo: "projeto"  },
  
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  
  /*cardio congenita (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto inclui cursos de capacitação, oficinas e materiais educativos para profissionais de saúde e usuários do SUS?", resposta: true, explicacao: "O projeto PROADI-SUS oferece capacitação, oficinas e materiais educativos para profissionais de saúde e usuários do SUS, visando aprimorar o diagnóstico e o tratamento das cardiopatias congênitas..", tipo: "pergunta" },

  /*Diretrizes (Projeto)*/ {background:"img/fundo/projeto-diretrizes.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=oNKqp0AP9_o",  tipo: "projeto"  },

  /*Precep médica (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "Os preceptores não estão envolvidos na formação de residentes?", resposta: false, explicacao: "Os preceptores são médicos e médicas envolvidos na formação de residentes.", tipo: "pergunta" },

  /*Precep médica (projeto)*/ { background:"img/fundo/projeto-preceptoria-medica.png",titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=WA6BLGVNN14",  tipo: "projeto"  },

  /*ATS (Pergunta*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto ATS Educação capacita gestores apenas para gestão financeira?", resposta: false, explicacao: "O projeto aborda avaliação de tecnologias em saúde e não se limita à gestão financeira.", tipo: "pergunta" },

  /*ATS (projeto)*/ { background: "img/fundo/projeto-ats-educação.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=7mvu2ebAU8E",  tipo: "projeto"},

  /*Diretrizes (pergunta) */ { background:"img/fundo/ta-certo-isso.png", pergunta: "O principal objetivo do projeto Diretrizes é criar hospitais para o Ministério da Saúde?", resposta: false, explicacao: "O principal objetivo do projeto Diretrizes não é criar hospitais, e sim apoiar o desenvolvimento de diretrizes clínico-assistenciais para o Ministério da Saúde.", tipo: "pergunta" },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*Artemis (projeto)*/ {background:"img/fundo/projeto-artemis.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=X2WEOnF5mao",  tipo: "projeto"  },

  /*Artemis (pergunta*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Artemis está relacionado à transformação digital na saúde?", resposta: true, explicacao: "O projeto Artemis promove transformação digital na saúde.", tipo: "pergunta" },

  /*Estudo cuidar (projeto)*/ {background:"img/fundo/projeto-estudo-cuidar.png", titulo: "", conteudo: "",  tipo: "projeto"  },

  /*Estudo cuidar (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O Estudo CuidAR é voltado para doenças respiratórias agudas?", resposta: false, explicacao: "O estudo é direcionado para doenças crônicas, não agudas.", tipo: "pergunta" },

  /*Onco-genomas (projeto)*/ {background:"img/fundo/projeto-onco-genomas.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=wOkTcLAxYPQ",  tipo: "projeto"  },

 
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  /*onco-genomas (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Oncogenomas Brasil não busca prevenir todos os tipos de câncer através da vacinação.?", resposta: true, explicacao: "O projeto Onco-Genomas Brasil não busca prevenir todos os tipos de câncer por meio da vacinação. Seu objetivo é caracterizar o perfil molecular dos cânceres de mama e próstata na população brasileira, visando aprimorar o diagnóstico e o tratamento dessas neoplasias..", tipo: "pergunta" },

  /*pos-covid (projeto)*/ { background:"img/fundo/projeto-pos-covid.png", titulo: "", conteudo: "",  video: "/img/videoteste.mp4",  tipo: "projeto" },

  /*physiosync (projeto)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "colocar pergunta sobre o Projeto PhysioSync-HF Follow-UP?", resposta: true, explicacao: "colocar resposta Projeto PhysioSync-HF Follow-UP.", tipo: "pergunta" },

  /*physiosync (pergunta)*/ {background:"img/fundo/projeto-physiosync.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=Atw5AdfzTm8",  tipo: "projeto"  },

  /*Rehab (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Rehab-VM Brasil é voltado à reabilitação de pacientes com doenças respiratórias leves?", resposta: false, explicacao: "O projeto foca na reabilitação de pacientes em ventilação mecânica prolongada.", tipo: "pergunta" },

  /*Rehab (projeto)*/ {background:"img/fundo/projeto-rehab-vm.png", titulo: "", conteudo: "", video:"https://www.youtube.com/watch?v=KUPtzfuNgH0",  tipo: "projeto"  },

  /*pos covid (pergunta)*/ {background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Pós-Covid Brasil estuda apenas os impactos físicos da Covid-19?", resposta: false, explicacao: "O estudo avalia os impactos físicos, mentais e sociais.", tipo: "pergunta" },
  
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },


  /*Resilient (projeto)*/ { background:"img/fundo/projeto-resilient.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*Resilient (projeto)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "Resilient?", resposta: true, explicacao: "resilente blablabla.", tipo: "pergunta" },

  /*TB-Ped (projeto)*/ {background:"img/fundo/projeto-tb-ped.png", titulo: "", conteudo: "", video: "/img/videoteste.mp4",  tipo: "projeto"  },

  /*TB-Ped (Pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto TB PED é voltado ao tratamento da tuberculose pediátrica?", resposta: true, explicacao: "O projeto foca no diagnóstico e tratamento da tuberculose pediátrica.", tipo: "pergunta" },

  /*Trident (Projeto)*/ {  background:"img/fundo/projeto-trident.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=-OOP8JS5OGQ",  tipo: "projeto"  },

  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },
  /*V*/ { titulo: "", conteudo: "", tipo: "" },

  
  /*Trident (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto Trident é voltado a diagnósticos mais rápidos?", resposta: true, explicacao: "O projeto busca avanços tecnológicos para diagnósticos rápidos e precisos.", tipo: "pergunta" },

   /*Projetos fim*/{ background: "img/fundo/fim-qr-code.jpg", tipo: "descricao" },

  /*tele-nordeste (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto TeleNordeste utiliza telemedicina para ampliar o acesso à saúde?", resposta: true, explicacao: "O projeto utiliza telemedicina para expandir o acesso à saúde no Nordeste do Brasil.", tipo: "pergunta" },


  /*tele-nordeste (projeto)*/ { background:"img/fundo/projeto-telenordeste.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=CS-8HO-Ci1I",  tipo: "projeto"  },

  
  /*Vigia-Sus (pergunta)*/ { background:"img/fundo/ta-certo-isso.png", pergunta: "O projeto VigiaSUS trata de agricultura sustentável?", resposta: false, explicacao: "O projeto é focado na vigilância em saúde e monitoramento de doenças emergentes.", tipo: "pergunta" },


  /*Vigia-Sus (projeto)*/ { background:"img/fundo/projeto-vigiasus.png", titulo: "", conteudo: "", video: "https://www.youtube.com/watch?v=ZU4Z985I9iU",  tipo: "projeto"  },


  /*Projetos fim*/{ background: "img/fundo/fim-agradecimento.png", tipo: "descricao" },

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
