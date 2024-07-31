import { Stack } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import FooterWatch from '../Footer/FooterWatch';

const ContentTab = ({ filmdata, loggedIn }) => {
  return (
      <Container>
          <Stack direction="column" spacing={"12px"} className="px-2 ">
              
              {/** overview */}
              {filmdata?.overview && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Overview
                      </Typography>
                      <Typography className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72] text-justify">
                          {filmdata?.overview}
                      </Typography>
                  </Stack>
              )}
              {/** audio languages */}
              {filmdata?.audioLanguages?.length > 0 && (
                  <Stack spacing={"14px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Audio Languages
                      </Typography>
                      <ul>
                          {filmdata?.audioLanguages?.map((data, index) => (
                              <span
                                  key={index}
                                  className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706e72]"
                              >
                                  {(index ? ", " : "") + data.name}
                              </span>
                          ))}
                      </ul>
                  </Stack>
              )}
              {/** subtitles */}
              {filmdata?.subtitles && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Subtitles
                      </Typography>
                      <Typography className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72]">
                          {filmdata?.subtitles}
                      </Typography>
                  </Stack>
              )}

              {/** Year Of Production */}
              {filmdata?.YearOfProduction && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Year of Production
                      </Typography>
                      <Typography className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72]">
                          {filmdata?.YearOfProduction}
                      </Typography>
                  </Stack>
              )}

              {/** Starring */}
              {filmdata?.actors?.length > 0 && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Starring
                      </Typography>
                      <ul>
                          {filmdata?.actors?.map((data, index) => (
                              <span
                                  key={index}
                                  className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72]"
                              >
                                  {(index ? ", " : "") + data}
                              </span>
                          ))}
                      </ul>
                  </Stack>
              )}

              {/** Directors */}
              {filmdata?.directors?.length > 0 && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Directors
                      </Typography>
                      <ul>
                          {filmdata?.directors?.map((data, index) => (
                              <span
                                  key={index}
                                  className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72]"
                              >
                                  {(index ? ", " : "") + data}
                              </span>
                          ))}
                      </ul>
                  </Stack>
              )}

              {/** producers */}
              {filmdata?.producers?.length > 0 && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Producers
                      </Typography>
                      <ul>
                          {filmdata?.producers?.map((data, index) => (
                              <span
                                  key={index}
                                  className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72]"
                              >
                                  {(index ? ", " : "") + data}
                              </span>
                          ))}
                      </ul>
                  </Stack>
              )}

              {/** writerss */}
              {filmdata?.writers?.length > 0 && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Writers
                      </Typography>
                      <ul>
                          {filmdata?.writers?.map((data, index) => (
                              <span
                                  key={index}
                                  className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72]"
                              >
                                  {(index ? ", " : "") + data}
                              </span>
                          ))}
                      </ul>
                  </Stack>
              )}

              {/** sound core */}
              {filmdata?.soundCore?.length > 0 && (
                  <Stack spacing={"7px"}>
                      <Typography className="font-[Inter-SemiBold] text-base sm:text-lg text-whites-40">
                          Sound Core
                      </Typography>
                      <ul>
                          {filmdata?.soundCore?.map((data, index) => (
                              <span className="font-[Inter-Regular] text-[14px] sm:text-base text-[#706E72]">
                                  {(index ? ", " : "") + data}
                              </span>
                          ))}
                      </ul>
                  </Stack>
              )}

           
          </Stack>

          {!loggedIn && <FooterWatch />}
      </Container>
  )
}

export default ContentTab
const Container = styled(Stack)``;