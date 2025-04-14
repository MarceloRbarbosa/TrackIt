import styled from "styled-components";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const habitosPage = location.pathname === "/habitos";
  const hojePage = location.pathname === "/hoje";

  return (
    <Bottons>
      <StyledLink to="/habitos">
        <Bottom $active={habitosPage}>
          <EditedCalendarMonthIcon $active={habitosPage} />
          <h1>Hábitos</h1>
        </Bottom>
      </StyledLink>
      <StyledLink to="/hoje">
        <Bottom $active={hojePage}>
          <EditedEventAvailableIcon $active={hojePage} />
          <h2>Hoje</h2>
        </Bottom>
      </StyledLink>
    </Bottons>
  );
}

export default Footer;

const Bottons = styled.div`
  display: flex;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${({ $active }) => ($active ? "#52b6ff" : "#ffffff")};

  h1,
  h2 {
    font-size: 18px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    color: ${({ $active }) => ($active ? "#ffffff" : "#d4d4d4")};
    margin-left: 5px;
  }
`;

const EditedCalendarMonthIcon = styled(CalendarMonthIcon)`
  width: 24px;
  height: 24px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#d4d4d4")};
`;

const EditedEventAvailableIcon = styled(EventAvailableIcon)`
  width: 20px;
  height: 20px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#d4d4d4")};
`;
