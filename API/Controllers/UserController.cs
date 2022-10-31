using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using API.Interfaces;
using API.DTO;
using AutoMapper;
using System.Security.Claims;

namespace API.Controllers
{
    [Authorize]
    public class UserController : BaseApiController
    {
        //private readonly DataContext _context;
      private readonly IUserRepository _userRepository;
      private readonly IMapper _mapper;

      public UserController(IUserRepository userRepository, IMapper mapper)
      {
         _userRepository = userRepository;
         _mapper = mapper;
      }


      // api/users
      [HttpGet("users")]
        
      public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
      {
         //var users = await _userRepository.GetUsersAsync();
         //var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

         //return Ok(usersToReturn);
         return Ok(await _userRepository.GetMembersAsync());
      }   

      // api/user/username
      [HttpGet("username")]
      public async Task<ActionResult<MemberDto>> GetUser(string username)
      {
         //var user = await _userRepository.GetByUserNameAsync(username);

         //return _mapper.Map<MemberDto>(user); 

         return await _userRepository.GetMemberAsync(username);
      }

      [HttpPut]
      public async Task<ActionResult> UpdateUser(MemberUpdateDto memberUpdateDto)
      {
         var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
         var user = await _userRepository.GetByUserNameAsync(username);

         _mapper.Map(memberUpdateDto, user);

         _userRepository.Update(user);

         if (await _userRepository.SaveAllAsync()) return NoContent();

         return BadRequest("Failed to update user");
      }
    }
}
