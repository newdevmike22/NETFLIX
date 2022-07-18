import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "Series" }</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://cdn.pixabay.com/photo/2017/02/26/12/45/las-galeras-2100152_1280.jpg" alt='netflix cover pic' />
            <div className="info">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dctx3rp-7c2620f9-f626-46b5-8fc3-c803acd4396a.png/v1/fill/w_900,h_379,strp/avengers__endgame__2019__logo_png__1_by_mintmovi3_dctx3rp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc5IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kY3R4M3JwLTdjMjYyMGY5LWY2MjYtNDZiNS04ZmMzLWM4MDNhY2Q0Mzk2YS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.1thG9Li-p5OwclQJmXUtjNGAhdsQ2TAY3Sx-CzBgoIs" alt="Avengers Endgame" />
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco? 
                    Laboris nisi ut aliquip ex ea commodo.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <HelpOutlineIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;