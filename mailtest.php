<?php

if (!mail('ezequielestigarribia@hotmail.com', 'MAIL TEST', 'test de mail')){
	echo 'errorservidor';
}else{
	echo 'envioexitoso';
}

?>