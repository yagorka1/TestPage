jQuery('.lightzoom').lightzoom();
      ( function( $ ) {

$( '.lightzoom' ).lightzoom( {
  speed:                 1000,   // скорость появления
  imgPadding:            10,    // значение отступа у изображения
  overlayOpacity:        '0.5', // прозрачность фона (от 0 до 1)
  viewTitle:             true, // true, если надо показывать подпись к изобажению
  isOverlayClickClosing: true, // true, если надо закрывать окно при клике по затемненной области
  isWindowClickClosing:  true, // true, если надо закрывать окно при клике по любой области
  isEscClosing:          true  // true, если надо закрывать окно при нажатии на кнопку Esc
} );

} )( jQuery );
