import { css } from "@emotion/css";
import { useEffect, useState } from "react";

import { getUsers, getPrizes, getTotals, getYears } from "service";
import UserCard from "components/card/UserCard";
import Input from "components/input/Input";
import { useThemeContext } from "context/ThemeContext";

const subtitleCSS = css`
  font-size: 20px;
  margin-bottom: 20px;
`;

const usersCSS = css`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-bottom: 30px;
`;

function getRewards({ users, years, totals, prizes }) {
  return users.map((user) => {
    const yearsUser = years.find((year) => year.userId === user.id);
    const totalsUser = totals.find((total) => {
      return yearsUser ? total.years === yearsUser.years : false;
    });
    const prizesUser = prizes.filter((prize) => {
      if (totalsUser) {
        return totalsUser.total >= prize.min && totalsUser.total < prize.max;
      } else {
        return false;
      }
    });
    const userYears = yearsUser ? yearsUser.years : 0;
    const userTotals = totalsUser ? totalsUser.total : 0;

    return {
      user,
      years: userYears,
      totals: userTotals,
      prizes: prizesUser
    };
  });
}

function Rewards() {
  const [users, setUsers] = useState([]);
  const [years, setYears] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [totals, setTotals] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const { theme } = useThemeContext();

  const handleSearch = (e) => {
    setSearchUser(e.currentTarget.value);
  };

  const result = getRewards({ users, years, prizes, totals });
  const filteredUsers = result.filter((res) => {
    const text = searchUser.toLowerCase();
    if (!searchUser) {
      return true;
    }
    let byLabel = true;
    if (text) {
      byLabel = res.user.label.toLowerCase().includes(text);
    }
    return byLabel;
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const [users, years, prizes, totals] = await Promise.all([
          getUsers,
          getYears,
          getPrizes,
          getTotals
        ]);
        setUsers(users);
        setYears(years);
        setPrizes(prizes);
        setTotals(totals);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetch();
  }, []);

  return (
    <div theme={theme}>
      <Input
        theme={theme}
        type="search"
        name="name"
        placeholder="Search all rewards"
        onChange={handleSearch}
        value={searchUser}
      />
      <h2 className={subtitleCSS}>Rewards</h2>
      <ul className={usersCSS}>
        {filteredUsers.map(({ user, years, totals, prizes }) => (
          <UserCard
            theme={theme}
            user={user}
            years={years}
            totals={totals}
            prizes={prizes}
          />
        ))}
      </ul>
    </div>
  );
}

export default Rewards;
