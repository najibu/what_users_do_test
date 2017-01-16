SELECT user_scores.year, GROUP_CONCAT(DISTINCT firstname, ' ', lastname, ' => ', mean ORDER BY mean DESC) FROM user_scores
LEFT JOIN (
  SELECT DISTINCT firstname, lastname, year, (SUM(score) / COUNT(score)) as mean FROM user_scores
    LEFT JOIN users ON users.id = user_scores.user_id
  GROUP BY user_id, year
) AS means ON means.year = user_scores.year
GROUP BY user_scores.year
ORDER BY user_scores.year ASC