import React from "react";
//import posterImage from "../../1-Assets/images/Movie poster/Movie poster.svg";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Box, Stack } from "@chakra-ui/react";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const MovieCard2 = ({ data, stylecard }) => {
    const [playActions, setPlayActions] = React.useState(false);
    const [posterlink, setPosterLink] = React.useState("");

    let ref = React.useRef();
    let routeNavigate = useNavigate();

    React.useEffect(() => {
        const handler = (event) => {
            if (playActions && ref.current && !ref.current.contains(event.target)) {
                setPlayActions(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [playActions]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setPlayActions(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setPlayActions(false);
    };

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const endItems = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[endItems]] = [
                shuffledArray[endItems],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    };

    //randomize data
    React.useEffect(() => {
        if (
            data?.episodeId?.posters?.length > 0 &&
            data?.episodeId?.posters?.length > 1
        ) {
            const shuffledItems = shuffleArray(data?.episodeId?.posters);
            let selectedlink = shuffledItems[0];
            setPosterLink(selectedlink);
        } else if (
            data?.episodeId?.posters?.length > 0 &&
            data?.episodeId?.posters?.length === 1
        ) {
            let selectedlink = data.episodeId.posters[0];
            setPosterLink(selectedlink);
        } else {
            setPosterLink(() => "");
        }
    }, [data]);

    const playLocalTrailer = () => {
       

        if (data.episodeId.youtubeTrailer) {
            window.location.href = `${data.episodeId.youtubeTrailer}` 
        }
        
    };
    //console.log(data);
    return (
        <MovieContainer
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}

            className={
                "min-h-[250px] h-max w-[200px] sm:w-[292px] md:min-h-[510px] md:w-[400px] flex flex-col items-start gap-3 pixelated box-border select-none "
            }
        >
            <div className="w-full rounded-sm">
                <img
                    src={posterlink}
                    alt={"movie"}
                    className="size-fit object-contain md:object-scale-down sm:size-fill object-top md:h-[252px] sm:h-[350px] w-full rounded-lg"
                />
            </div>

            <div>
                <Buttons
                    onClick={() => playLocalTrailer()}
                    className="flex w-max px-5 sm:px-8 py-2 items-center justify-center space-x-2 rounded-full relative bg-[#706e72]"
                >
                    <Icon
                        icon="solar:play-circle-linear"

                        className="w-6 h-6 text-whites-40"
                    />
                 
                    <Typography className="font-[Roboto-Regular] text-[14px] sm:text-base">
                        Trailer
                    </Typography>
                </Buttons>
            </div>
            <div className="h-max w-[100%]  relative pb-0">
                <Typography className="line-clamp-3 text-[#ffffff] font-sans font-normal text-[11px] sm:text-base sm:text-justify">
                    {data.episodeId.plotSummary}
                </Typography>
            </div>


        </MovieContainer>
    );
};

export default MovieCard2;

const MovieContainer = styled(Box)`
  &&.pixelated > img {
    image-rendering: auto !important;
  }
`;
