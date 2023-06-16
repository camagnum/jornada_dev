import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>@Paulo Ebac</h3>
				<p>Descrição do Vídeo</p>
				<div className="videoFooter__music">
					<MusicNoteIcon />
					<div className="videoFooterMusic__text">
						<p>Título da música</p>
					</div>
				</div>
			</div>
			<img
				className="videoFooter_record"
				alt="Imagem de vinil girando"
				src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
			/>
		</div>
	);
}

export default VideoFooter;
