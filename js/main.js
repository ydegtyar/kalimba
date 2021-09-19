import a_kalimba_b3 from '../assets/audio/kalimba_keys/a_kalimba_b3.wav'
import b_kalimba_c4 from '../assets/audio/kalimba_keys/b_kalimba_c4.wav'
import c_kalimba_d4 from '../assets/audio/kalimba_keys/c_kalimba_d4.wav'
import d_kalimba_e4 from '../assets/audio/kalimba_keys/d_kalimba_e4.wav'
import e_kalimba_fsharp4 from '../assets/audio/kalimba_keys/e_kalimba_fsharp4.wav'
import f_kalimba_g4 from '../assets/audio/kalimba_keys/f_kalimba_g4.wav'
import g_kalimba_a4 from '../assets/audio/kalimba_keys/g_kalimba_a4.wav'
import h_kalimba_b4 from '../assets/audio/kalimba_keys/h_kalimba_b4.wav'
import i_kalimba_c5 from '../assets/audio/kalimba_keys/i_kalimba_c5.wav'
import j_kalimba_d5 from '../assets/audio/kalimba_keys/j_kalimba_d5.wav'
import k_kalimba_e5 from '../assets/audio/kalimba_keys/k_kalimba_e5.wav'
import l_kalimba_fsharp5 from '../assets/audio/kalimba_keys/l_kalimba_fsharp5.wav'
import m_kalimba_g5 from '../assets/audio/kalimba_keys/m_kalimba_g5.wav'
import n_kalimba_a5 from '../assets/audio/kalimba_keys/n_kalimba_a5.wav'
import o_kalimba_b5 from '../assets/audio/kalimba_keys/o_kalimba_b5.wav'
import p_kalimba_c6 from '../assets/audio/kalimba_keys/p_kalimba_c6.wav'

const keyElements = document.querySelectorAll('.key')

const notePathMap = {
  a_kalimba_b3: a_kalimba_b3,
  b_kalimba_c4: b_kalimba_c4,
  c_kalimba_d4: c_kalimba_d4,
  d_kalimba_e4: d_kalimba_e4,
  e_kalimba_fsharp4: e_kalimba_fsharp4,
  f_kalimba_g4: f_kalimba_g4,
  g_kalimba_a4: g_kalimba_a4,
  h_kalimba_b4: h_kalimba_b4,
  i_kalimba_c5: i_kalimba_c5,
  j_kalimba_d5: j_kalimba_d5,
  k_kalimba_e5: k_kalimba_e5,
  l_kalimba_fsharp5: l_kalimba_fsharp5,
  m_kalimba_g5: m_kalimba_g5,
  n_kalimba_a5: n_kalimba_a5,
  o_kalimba_b5: o_kalimba_b5,
  p_kalimba_c6: p_kalimba_c6,
}

const noteTimeouts = {}

const playHandler = (keyElement) => {
  const note = keyElement.dataset.note
  const audio = new Audio(notePathMap[note])
  audio.play()

  if (keyElement.classList.contains('shakeX')) {
    keyElement.classList.remove('shakeX')
  }

  setTimeout(() => {
    keyElement.classList.add('shakeX')
  }, 0)

  clearTimeout(noteTimeouts[note])
  noteTimeouts[note] = setTimeout(() => {
    keyElement.classList.remove('shakeX')
  }, 300)
}

keyElements.forEach((key) => {
  key.addEventListener('click', ({ target }) => playHandler(target))
})

